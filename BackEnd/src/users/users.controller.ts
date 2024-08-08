// four APIs for  user registration and stuff   (create ,retrieve , update , delete)
//



import {
     Controller,
     Get,
     Post,
     Body,
     Param,
     Delete,
     Put,Query,ParseIntPipe,ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    
    //Get request for all users data 
    @Get()   //Get /users or /users?userType=value
findAll(@Query('userType') userType?:'DOCTOR'|'PARENT'){
    return this.usersService.findAll(userType)
    
}

    //get request for single user data
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id);
    }

    //Later try to create api for getting users based on their type 

    //create new user  
    @Post()
    create(@Body(ValidationPipe) createUserDto:CreateUserDto){
    return this.usersService.create(createUserDto);
}


    //upadte user datail
    //@Patch(':id')      //patch  /users/:id
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto:UpdateUserDto){
    return this.usersService.update(id, updateUserDto)
}
    
    //Delete user information from the database
    @Delete(':id')  //Delete /user/:id
    delete(@Param('id',ParseIntPipe) id:number){
    return this.usersService.delete(id)
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


    
    

