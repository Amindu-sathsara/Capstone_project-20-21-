import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/login-user.dto';
import {SignInUserDto} from './dto/signInData-user.dto';
import {AuthorizedUserResultDto} from './dto/Authorized-userResullt.dto';
import { UserDto } from './dto/user.dto';


// import * as bcrypt from 'bcrypt'; =>>>>👀👀👀👀👀 Dilshan ayye mentioned few times : Make sure to bcrypt password before save password in the database 

import * as nodemailer from 'nodemailer';
@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) {}

  // Validate the user (direct password comparison)
  async validateUser(loginUserDto: LoginUserDto): Promise<SignInUserDto | null> {
    const user = await this.userService.findUserByName(loginUserDto.userName);  // Find user by username

    if (user && user.password === loginUserDto.password) {  // Direct password comparison
      return {
        nicNo: user.nicNo,  // MongoDB ObjectId
        userName: user.userName,
        userType: user.userType,  
      };
    }
    return null;
  }

  async authenticateUser(loginUserDto: LoginUserDto): Promise<AuthorizedUserResultDto> {
    const user = await this.validateUser(loginUserDto);

    if (!user) {
      throw new UnauthorizedException('The given username or password does not match any user in this platform');
    }

    return this.generateAuthResult(user);
  }

  async generateAuthResult(user: SignInUserDto): Promise<AuthorizedUserResultDto> {
    const tokenPayloadData = {
      sub: user.nicNo,  // MongoDB ObjectId
      userName: user.userName,
      userType: user.userType,
    };

    const accessToken = await this.jwtService.signAsync(tokenPayloadData);
    return { accessToken, nicNo: user.nicNo, userName: user.userName,userType:user.userType };
  }


  //Protected API for Change password 
  //Still I am not use bcrypt / hashing the password - If I use bcrypt then this route and service of this should change 
  async changePassword(userName: string, password: string, newPassword: string): Promise<any> {
    //  Find the user by username
    const user = await this.userService.findUserByName(userName);
  
    if (!user) {
      throw new UnauthorizedException(`User with username ${userName} not found`);
    }
  
    //  Direct comparison of the current password (no bcrypt)
    if (user.password !== password) {
      throw new UnauthorizedException('Your entered current password is not valid');
    }
  
    // Directly update the user's password (no bcrypt hashing) - But Dishan ayya also suggest to update password saving by using hashing
    await this.userService.updateUserPassword(user.userName, newPassword);  // Call service to update password
  
    return "Password changed successfully";
  }

  //Public API for forgot password 
         //Now let's add Nodemailer configuration first
         private transporter = nodemailer.createTransport({
          service: 'gmail', // or use any email service provider
          auth: {
            user: process.env.EMAIL_USER, // your email address
            pass: process.env.EMAIL_PASS, // your email password
          },
        });

        async forgotPassword(email: string): Promise<any> {
          // Check if user exists
          const user = await this.userService.findUserByEmail(email);
      
          if (!user) {
            throw new UnauthorizedException(`No user found with email ${email}`);
          }
      
          // Generate a reset token (JWT or random token)
          const token = await this.jwtService.signAsync({ email: user.email, nicNo: user.nicNo }, { expiresIn: '1h' });
      
          // Create the reset link
          const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;
      
          // Send the reset link to the user's email using Nodemailer
          const mailOptions = {
            from: 'noreply@yourapp.com',
            to: email,
            subject: 'Password Reset Request',
            html: `<p>Hello ${user.fullName},</p><p>You requested to reset your password. Please click on the following link to reset it:</p>
                   <a href="${resetLink}">Reset Password</a><p>This link will expire in 1 hour.</p>`,
          };
      
          await this.transporter.sendMail(mailOptions);
      
          return { message: 'Password reset link has been sent to your email.' };
        }

        
  // Logic to handle the password reset (in the reset password route)
  async resetPassword(token: string, newPassword: string): Promise<any> {
    try {
      // Verify the token
      const decoded = await this.jwtService.verifyAsync(token);

      // Find user by decoded token info
      const user = await this.userService.findUserByEmail(decoded.email);
      if (!user) {
        throw new UnauthorizedException('Invalid token or user not found');
      }

      // Update user's password
      await this.userService.updateUserPassword(user.userName, newPassword);

      return { message: 'Password reset successfully' };
    } catch (error) {
      throw new UnauthorizedException('Token expired or invalid');
    }
  }



  // Protected API for fetching full user details based on userId
  async getUserDetails(nicNo: string): Promise<any> {
    const user = await this.userService.findUserBynicNo(nicNo);

    if (!user) {
      throw new UnauthorizedException(`User with userId ${nicNo} not found`);
    }
    const u= new UserDto();
    u.id = user.id;
    u.fullName = user.fullName;
    u.nicNo = user.nicNo;
    u.email = user.email;
    u.contactNo = user.contactNo;
    u.userType = user.userType;
    u.userName = user.userName;
    return u;
    //return user;  // Returning full user details
  }
}
