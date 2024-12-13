import { Controller, Post, Get, Body, HttpCode, HttpStatus, UseGuards, Request, UnauthorizedException, Put, Patch, Param, BadRequestException,NotFoundException,Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { LoginUserDto } from './dto/login-user.dto';
import { ChangeUserPasswordDto } from './dto/change-user-password.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { UpdateFieldsDto } from './dto/update-fields.dto';
import { AuthGuard } from './guards/auth.guards';
import { RolesGuard } from '../RBAC/guards/roles.guards';
import { Roles } from 'src/RBAC/decorators/roles.decorator';


@Controller('auth')
export class AuthController {
    constructor(
      private authService: AuthService,
      private userService: UsersService
      ) {}


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
@Patch('change-password') 
async changePassword(@Body() changeUserPasswordDto: ChangeUserPasswordDto, @Request() req) {
  const changePassword = await this.authService.changePassword(
    req.user.userName, // Access user details correctly
    changeUserPasswordDto.password,
    changeUserPasswordDto.newPassword
  );

  return { message: 'Password successfully updated' }; // Return a success message
}

    //Public API for user's to create password if the password is forgot that given by hospital admin or that change by the user 
  @Roles('DOCTOR','PARENT')
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

    @UseGuards(AuthGuard,RolesGuard)
    @Roles( 'DOCTOR','PARENT')
    @Get('user-details')
    async getUserDetails(@Request() request) {
    const nicNo = request.user.sub;  // Extract userId from JWT payload
    console.log('Extracted user nicNo', nicNo);  // Log the extracted userId for debugging
    return this.authService.getUserDetails(nicNo);  // Fetch full user details by userId
  }

  // all the end points that only related to the user only and without relying on the details of the child profiles 
   
  //Get request end point for current doctor name  - only for the doctor type user
  @UseGuards(AuthGuard, RolesGuard)
    @Roles('DOCTOR')
    @Get('doctor-name')
    async getDoctorDetails(@Request() request) {
    const nicNo = request.user.sub;  
    console.log('Extracted user nicNo', nicNo);  // this is related to the debugging purpose only to make sure 
    return this.authService.getDoctorDetails(nicNo);  // Fetch current userName
  }

  //Get request end point for current parent name -only for the parent type user
    @UseGuards(AuthGuard, RolesGuard)
    @Roles('PARENT')
    @Get('parent-name')
    async getParentDetails(@Request() request) {
    const nicNo = request.user.sub;  
    console.log('Extracted user nicNo', nicNo);  // this is related to the debugging purpose only to make sure 
    return this.authService.getParentDetails(nicNo);  // Fetch current userName
  }



  //.........................................................................................

  //Get all the childprofile of particular parent 

  @UseGuards(AuthGuard) // Protect this endpoint
  @Roles( 'PARENT')
  @Get('parent-child-profiles')
  async getUserChildProfiles(@Request() request) {
          const { nicNo } = request.user; // Assuming JWT payload contains nicNo
          return this.userService.getUserWithChildProfiles(nicNo);
        }
  
  //Get all the child profile for doctor's - only for the doctor type user
  @UseGuards(AuthGuard) 
  @Roles('DOCTOR')
  @Get('doctor-child-profiles')
async getDoctorChildProfiles(@Request() request) {
  const { userType } = request.user; // Extract userType from JWT payload

  if (userType !== 'DOCTOR') {
    return 'You are not registered as a , please contact our support team. or emai for kidscarehelpcenter@gmail.com';
  }

  return this.userService.getAllChildProfiles(); // Call service method to fetch all child profiles
}

//latest changes 11/12/2024
@UseGuards(AuthGuard)
@Roles('PARENT')
@Get('child-profile/:childId')
async getChildProfileById(@Param('childId') childId: string, @Request() req) {
    const parentNic = req.user.nicNo; // Extract `parentNic` from JWT payload
    return this.userService.getChildProfileById(childId, parentNic);
}
// child profile access for doctors - only for the doctor type user
//According to DH guidelines I have do this - need to get review and after that just remove 
//this two lines of comments after confirmation from DH ayya 
@UseGuards(AuthGuard, RolesGuard)
@Roles('DOCTOR')
@Get('doctor-child-profiles-paginated')
async getDoctorChildProfilesWithPagination(
  @Request() req,
  @Query('page') page: number = 1, // Default to page 1
  @Query('limit') limit: number = 5 // Default to 10 items per page
) {
  const userType = req.user.userType; // Extract userType from JWT payload
  if (userType !== 'DOCTOR') {
    throw new UnauthorizedException(
      'You are not authorized to access this resource.'
    );
  }
  // Call the service to fetch paginated results
  return this.userService.getPaginatedChildProfiles(page, limit);
}


 //From here onwards I just add endpoint that can access only for the DOCTOR and 
 //they can modify or delete content of the child profiles and parent can't do it 

 //Routh for updating the child profiles specific fields - This end point can be 
 //add to serveral place beacuse this can work differently according to the request body 
 //TO archive that I have created optional fields for DTO 

 @UseGuards(AuthGuard, RolesGuard)
 @Roles('DOCTOR')
 @Patch('child-profile-fields/:childId')
async appendOrUpdateChildProfileFields(
  @Param('childId') childId: string,
  @Body() updateFieldsDto: UpdateFieldsDto
) {
  return this.userService.updateChildProfileFields(childId, updateFieldsDto);
}

  

  
}