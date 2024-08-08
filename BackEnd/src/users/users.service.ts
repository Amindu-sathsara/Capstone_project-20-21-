import { PrismaClient } from '@prisma/client';
//import { CreateUserDto } from './../dto/user.dto';
//import { InjectRepository } from '@nestjs/typeorm';
//import { Repository } from 'typeorm';
import { Injectable,NotFoundException } from '@nestjs/common';
//import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import {UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UsersService {
    //constructor(private readonly prisma: PrismaService) {}
    private prisma = new PrismaClient();
    private users=[
        {
            id: 1,
            fullName: 'John Doe',
            email: 'john.doe@example.com',
            nicNo: '1234567890',
            userType: 'DOCTOR',

        },
        {
            id:2,
            fullName:'james Anderson',
            email:'Anderson@gmail.com',
            nicNo:'243228233',
            userType:'DOCTOR',
        },
        {
            
            id:3,
            fullName:'Rohit Sharma',
            email:'RohitSharma@gmail.com',
            nicNo:'243228233',
            userType:'PARENT',
        }
    ]
    //Method for getting all users detaiils
    findAll(userType?: 'DOCTOR' | 'PARENT' ) {
        if (userType) {
            const AllusersArray=this.users.filter(user => user.userType === userType);
            
            if(AllusersArray.length===0) {
                throw new NotFoundException('That user type is not found');
            }
            else{
                return AllusersArray;
            }
        }
        return this.users;
    }

    //Method for getting one user detail
    findOne(id:number){
    const user = this.users.find(user => user.id === id);
        if(!user) throw new NotFoundException("That user is not found");
        return user;
    }

    //Method for creating new user
    async create(createUserDto: CreateUserDto) { 
        // const {
            
        // } = createUserDto; 
        await this.prisma.user.create({
            data: {
                fullName: 'test',
                nicNo: '1996',
                email: "unique",
                contactNo: '071',
                userType: 'admin',
                password: 'test',
                userName: 'some username'
            }
            
        })
        const userByHighestId = [...this.users].sort((a, b) => b.id - a.id);
        const newUser = {
            id: userByHighestId[0].id + 1,
            ...createUserDto
        };
        this.users.push(newUser);
        return newUser;
    }

    //Method for updating an existing user
    update(id: number, updateUserDto: UpdateUserDto) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updateUserDto };
            }
            return user;
        });
        return this.findOne(id);
    }

    //Method to delete User 
    delete(id: number) {
        const removedUser = this.findOne(id);
        this.users = this.users.filter(user => user.id !== id);
        return removedUser;
    }





    /*async createUser(createUserDto: CreateUserDto) {
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
