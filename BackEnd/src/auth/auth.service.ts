import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/login-user.dto';
import {SignInUserDto} from './dto/signInData-user.dto';
import {AuthorizedUserResultDto} from './dto/Authorized-userResullt.dto';
import { UserDto } from './dto/user.dto';


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

  // Protected API for fetching full user details based on userId
  async getUserDetails(nicNo: string): Promise<any> {
    const user = await this.userService.findUserByParentNic(nicNo);

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
