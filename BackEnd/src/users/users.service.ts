
import { PrismaClient } from '@prisma/client';
//import { PrismaClient } from '@prisma/client';
//src/users/users.service.ts


//import { InjectRepository } from '@nestjs/typeorm';
//import { Repository } from 'typeorm';
//import { CreateUserDto } from './dto/create-user.dto';
//import { UpdateUserDto } from './dto/update-user.dto';

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/user.dto';



@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}

    async createUser(createUserDto: CreateUserDto) {
        const { name, email, nicNo, userType } = createUserDto;
        return await this.prisma.prismaClient.user.CreateUserDto({
            data: {
                fullName: name,
                email,
                nicNo,
                userType,
            },
        });
    }
    //create user and there data 
    /*async create(data:any){
        return this.prisma.prismaClient.user.create({
            data: data,
        });
    }*/
    /*async create(createUserDto: CreateUserDto) {
        return await this.prisma.prismaClient.user.create({
            data: createUserDto,
        });
    }*/

    //find all users
    /*async findAll() {
        return await this.prisma.user.findMany();
    }
    //find one user
    async findOne(id: any) {
        return await this.prisma.user.findUnique({
            where: {
                id: id,
            },
        });
    }*/


    //Update users data
    /*async update(id: any, data: any) {
        return this.prisma.prismaClient.user.update({
            where: {
                id: id,
            },
            data: data,
        });

    }*/

    //remove users data     from the database collection 
    /*async remove(id: any) {
        return this.prisma.prismaClient.user.delete({
            where: {
                id: id,
            },*/
}
