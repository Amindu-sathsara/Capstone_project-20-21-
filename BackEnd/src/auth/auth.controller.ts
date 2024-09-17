import { Controller, Post, Get, Body, HttpCode, HttpStatus, UseGuards, Request, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

import { LoginUserDto } from './dto/login-user.dto';

import { AuthGuard } from './guards/auth.guards';


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
    

    // Proctected Routes end Point for getting all the datails of users 

    @UseGuards(AuthGuard)
    @Get('user-details')
    async getUserDetails(@Request() request) {
    const parentNic = request.user.sub;  // Extract userId from JWT payload
    console.log('Extracted userId:', parentNic);  // Log the extracted userId for debugging
    return this.authService.getUserDetails(parentNic);  // Fetch full user details by userId
  }
}