import { PrismaClient } from '@prisma/client';
//import { CreateUserDto } from './../dto/user.dto';
//import { InjectRepository } from '@nestjs/typeorm';
//import { Repository } from 'typeorm';
import { Injectable,NotFoundException } from '@nestjs/common';
//import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import {UpdateUserDto } from './dto/update-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';


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
    /*Meth1:findAll(userType?: 'DOCTOR' | 'PARENT' ) {
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
    }*/

        //second method to get all users :
        async findAll() {
            return this.prisma.user.findMany();
          }

    //Method for getting one user detail
    /*findOne(id:number){
    const user = this.users.find(user => user.id === id);
        if(!user) throw new NotFoundException("That user is not found");
        return user;
    }*/

    //second attempt for getting one user
    async findOne(findUserDto: FindUserDto) {
        const user = await this.prisma.user.findFirst({
            where: {
                fullName: findUserDto.fullName,
                nicNo: findUserDto.nicNo,
                email: findUserDto.email,
                contactNo: findUserDto.contactNo,
            },
        });

        if (!user) {
            throw new NotFoundException('User with the provided details not found');
        }

        return user;
    }

     // Find a user by username
  async findUserByName(userName: string):Promise<any> {
    return this.prisma.user.findUnique({
      where: { userName },  // Search user by username
    });
  }

    //Find the user by user nicNo
    async findUserByNic(nicNo: string): Promise<any> {
      return this.prisma.user.findFirst({
        where: { nicNo },
      })
    }
  

  // Find a user by their nicNo
  async findUserBynicNo(nicNo: string): Promise<any> {
    return this.prisma.user.findFirst({
      where: { nicNo },
    });
  }

  // Find a user by email
  async findUserByEmail(email:string):Promise<any>{
    return this.prisma.user.findFirst({
      where:{email}
    })
  }

    
    //Method for creating new user
    /*async create(createUserDto: CreateUserDto) { 
        // const {
            
        // } = createUserDto; 
        await this.prisma.user.create({
            data: {
                fullName: 'test1',
                nicNo: '1996234',
                email: "unique2342",
                contactNo: '071332525',
                userType: 'DOCTOR',
                password: 'test1',
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
    }*/

    //succesfull second attempt: have been created user APIs 
    async create(createUserDto: CreateUserDto) {
        try {
          // Check if user with the same userName already exists
          const existingUser = await this.prisma.user.findUnique({
            where: { userName: createUserDto.userName },
          });
      
          if (existingUser) {
            throw new Error('User with this username already exists.');
          }
      
          // Create the new user if no duplicate is found
          return await this.prisma.user.create({
            data: createUserDto,
          });
        } catch (error) {
          // Log the error and throw a specific error message
          console.error('Error creating user:', error.message || error);
          throw new Error(error.message || 'Internal Server Error');
        }
      }
      

    //Method for updating an existing user
    /*update(id: number, updateUserDto: UpdateUserDto) {
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
    }*/





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

        //update one user method write here ...
        async update(updateUserDto: UpdateUserDto) {
            // Check if the user exists
            const user = await this.prisma.user.findFirst({
              where: {
                fullName: updateUserDto.fullName,
                nicNo: updateUserDto.nicNo,
              },
            });
        
            if (!user) {
              throw new NotFoundException('User with the provided details not found');
            }
        
            // Update the user details
            return await this.prisma.user.update({
              where: {
                id: user.id,
              },
              data: updateUserDto,
            });
        }
        

    //remove users data     from the database collection 
    /*async remove(id: any) {
        return this.prisma.prismaClient.user.delete({
            where: {
                id: id,
            },*/

    //Delete one user method :
    async delete(deleteUserDto: DeleteUserDto) {
        // Find the user to ensure it exists before deletion
        const user = await this.prisma.user.findFirst({
          where: {
            fullName: deleteUserDto.fullName,
            nicNo: deleteUserDto.nicNo,
          },
        });
    
        if (!user) {
          throw new NotFoundException('User with the provided details not found');
        }
    
        // Delete the user
        await this.prisma.user.delete({
          where: {
            id: user.id,
          },
        });
    
        return { message: 'User successfully deleted' };
      }

      //User service logic for update user password
      async updateUserPassword(userName: string, newHashedPassword: string): Promise<void> {
        await this.prisma.user.update({
          where: { userName: userName, },
          data: { password: newHashedPassword },
        });
      }


}
