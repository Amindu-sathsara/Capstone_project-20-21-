// four APIs for  user registration and stuff   (create ,retrieve , update , delete)
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
    
    
    //End point for get all users => localhost:3000/users  (GET)
    @Get()
    findAll() {
    return this.usersService.findAll();
    }

    //End point for  get single user   => localhost:3000/users/findone (GET)
    @Get('findone')
    findOne(@Query(ValidationPipe) findUserDto: FindUserDto) {
    return this.usersService.findOne(findUserDto);
}

    //create new user  
    @Post()
    create(@Body(ValidationPipe) createUserDto:CreateUserDto){
    return this.usersService.create(createUserDto);
}


    //update users with finding relavant user from userName and nicNo
    @Patch('updateuser')
    update(@Body(ValidationPipe) updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto);
    }

    //Delete one user from user: fullName and nicNo
    @Delete('deleteuser')
    delete(@Body(ValidationPipe) deleteUserDto: DeleteUserDto) {
    return this.usersService.delete(deleteUserDto);
  }

}


    
    

