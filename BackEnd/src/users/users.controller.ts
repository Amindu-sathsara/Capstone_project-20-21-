// four APIs for  user registration and stuff   (create ,retrieve , update , delete)
//



import {
     Controller,
     Get,
     Post,
     Body,
     Param,
     Delete,
     Put,Query,ParseIntPipe,ValidationPipe, 
     Patch} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    
    //Get request for all users data 
    /*Meth1:@Get()   //Get /users or /users?userType=value
findAll(@Query('userType') userType?:'DOCTOR'|'PARENT'){    //This Api also no need curretly for our web or mobile app
    return this.usersService.findAll(userType)
    
}*/
    //Get all users
    @Get()
    async findAll() {
    const d=await this.usersService.findAll();
    }


    //get request for single user data
    /*@Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id);
    }*/

    //second attempt to get single user   ()
    @Get('findone')
<<<<<<< HEAD
    findOne(@Query(ValidationPipe) findUserDto: FindUserDto) {
    return this.usersService.findOne(findUserDto);
=======
    async findOne(@Body(ValidationPipe) findUserDto: FindUserDto) {
    const e =await this.usersService.findOne(findUserDto);
>>>>>>> e885725feb44e682f83093ae5b5c992693c5849b
}



    //Later try to create api for getting users based on their type 

    //create new user  
    @Post()
<<<<<<< HEAD
    async Create(@Body(ValidationPipe) createUserDto:CreateUserDto){
    return await this.usersService.create(createUserDto);
=======
    async create(@Body(ValidationPipe) createUserDto:CreateUserDto){
    const f=await this.usersService.create(createUserDto);
>>>>>>> e885725feb44e682f83093ae5b5c992693c5849b
}


    //upadte user datail
    //@Patch(':id')      //patch  /users/:id
    /*update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto:UpdateUserDto){
    return this.usersService.update(id, updateUserDto)
}
    
    //Delete user information from the database
    @Delete(':id')  //Delete /user/:id
    delete(@Param('id',ParseIntPipe) id:number){
    return this.usersService.delete(id)
}  */


    //update users with finding relavant user from userName and nicNo
<<<<<<< HEAD
    @Patch('updateuser')
    update(@Body(ValidationPipe) updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto);
=======
    @Put('updateuser')
    async update(@Body(ValidationPipe) updateUserDto: UpdateUserDto) {
    const g=await this.usersService.update(updateUserDto);
>>>>>>> e885725feb44e682f83093ae5b5c992693c5849b
    }

    //Delete one user from user: fullName and nicNo
    @Delete('deleteuser')
    async delete(@Body(ValidationPipe) deleteUserDto: DeleteUserDto) {
    const h=await this.usersService.delete(deleteUserDto);
  }
    

    



    /*@Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        return await this.usersService.createUser(createUserDto);
    }*/
    //get request for users data
    /*@Get()
    findAll() {
        return this.usersService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id);
    }*/
    //post request for insert users data to the mongodb database
    //atlas database 
    /*@Post()
    create(@Body() createUsersDto: CreateUsersDto) {
        return this.usersService.create(createUsersDto);
    }*/

    //but I think this is better for crate usera account
    /*@Post()
    create(@Body() body:any) {
        return this.usersService.create(body);
    }*/

    /*@Put()
    update(@Body() createUsersDto: CreateUsersDto) {
        return this.usersService.update(createUsersDto);
    }*/

    /*@Put()
    update(@Param('id') id: string, @Body() body: any){
        return this.usersService.update(+id, body);
    }*/

    /*@Delete(':id')
    remove(@Param('id') id: string) {
        return this.usersService.remove(+id);
    }*/

}


    
    

