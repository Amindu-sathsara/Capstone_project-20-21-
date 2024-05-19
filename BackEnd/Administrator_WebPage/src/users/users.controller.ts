import {
     Controller,
     Get,
     Post,
     Body,
     Param,
     Delete,
     Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '../dto/user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        return await this.usersService.createUser(createUserDto);
    }
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
