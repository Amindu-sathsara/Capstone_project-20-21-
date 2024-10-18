import { Controller, Post, Get, Body, HttpCode, HttpStatus, UseGuards, Request, UnauthorizedException,Put } from '@nestjs/common';
import { AuthService } from './auth.service';

import { LoginUserDto } from './dto/login-user.dto';
import { ChangeUserPasswordDto } from './dto/change-user-password.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';

import { AuthGuard } from './guards/auth.guards';
import { RolesGuard } from '../RBAC/guards/roles.guards';
import { Roles } from 'src/RBAC/decorators/roles.decorator';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}


    //login endpoint for the users 
    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto) {
        const checkUser= await this.authService.authenticateUser(loginUserDto); //

        if(!checkUser){
          throw new UnauthorizedException('Your entered password or userName incorrect');
        }
        return checkUser;
            
    }

    //Protected end point for users to Change their password
    @UseGuards(AuthGuard, RolesGuard)
@Roles('DOCTOR', 'PARENT')
@Put('change-password') 
async changePassword(@Body() changeUserPasswordDto: ChangeUserPasswordDto, @Request() req) {
  const changePassword = await this.authService.changePassword(
    req.user.userName, // Access user details correctly
    changeUserPasswordDto.password,
    changeUserPasswordDto.newPassword
  );

  return { message: 'Password successfully updated' }; // Return a success message
}

    //Public API for user's to create password if the password is forgot that given by hospital admin or that change by the user 
  
  @Post('forgot-password')
  async forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
    return this.authService.forgotPassword(forgotPasswordDto.email);
 
}
  // reset password route handle here
  @Post('reset-password')
async resetPassword(
  @Body('token') token: string, 
  @Body('newPassword') newPassword: string
) {
  return this.authService.resetPassword(token, newPassword);
}



    

    // Proctected Routes end Point for getting all the datails of users 

    @UseGuards(AuthGuard)
    @Roles('DOCTOR', 'PARENT')
    @Get('user-details')
    async getUserDetails(@Request() request) {
    const nicNo = request.user.sub;  // Extract userId from JWT payload
    console.log('Extracted userId:', nicNo);  // Log the extracted userId for debugging
    return this.authService.getUserDetails(nicNo);  // Fetch full user details by userId
  }
}