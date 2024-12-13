//import { UserChildProfileDto } from './../auth/dto/user-child-profile.dto';
import { PrismaClient } from '@prisma/client';
//import { CreateUserDto } from './../dto/user.dto';
//import { InjectRepository } from '@nestjs/typeorm';
//import { Repository } from 'typeorm';
import { Injectable,NotFoundException,BadRequestException } from '@nestjs/common';
//import { PrismaService } from 'src/prisma/prisma.service';
import { ChildProfileService } from 'src/child-profile/child-profile.service';
import { CreateUserDto } from './dto/create-user.dto';
import {UpdateUserDto } from './dto/update-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';
import { UserChildProfileDto } from 'src/auth/dto/user-child-profile.dto';
import { UpdateFieldsDto } from 'src/auth/dto/update-fields.dto';

@Injectable()
export class UsersService {
    //constructor(private readonly prisma: PrismaService) {}
    private prisma = new PrismaClient();
    private childProfileService: ChildProfileService;
    
   
    // method to get all users details  :
        async findAll() {
            return this.prisma.user.findMany();
          }

    
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
  

  // Find a user by their nicNo
  async findUserByParentNic(nicNo: string): Promise<any> {
    return this.prisma.user.findFirst({
      where: { nicNo },
    });
  }

  //Find the user by user nicNo
  async findUserByNic(nicNo: string): Promise<any> {
    return this.prisma.user.findFirst({
      where: { nicNo },
    })
  }

  async findUserByEmail(email:string):Promise<any>{
    return this.prisma.user.findFirst({
      where:{email}
    })
  }
    //method for creating a new user 
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
                nicNo: user.nicNo,
              },
              data: updateUserDto,
            });
        }
        

    

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

      // UsersService for update user's password
async updateUserPassword(userName: string, newHashedPassword: string): Promise<void> {
  await this.prisma.user.update({
    where: { userName: userName, },
    data: { password: newHashedPassword },
  });
}
//.......................................................................................................
   //From this onwards I just focus on creating user and childProfile APIs that include their basic relationships
   async getUserWithChildProfiles(nicNo: string) {
    // Check if nicNo is provided
    if (!nicNo) {
      throw new Error('There is no any child profile for the particular user');
    }
  
    try {
      // Find user by NIC number and include associated childProfiles
      const user = await this.prisma.user.findUnique({
        where: { nicNo },
        include: { childProfiles: true },
      });
  
      // Check if user exists
      if (!user) {
        throw new Error(`User with NIC number ${nicNo} not found.`);
      }
  
      // Check if user has any child profiles
      /*if (user.childProfiles.length === 0) {
        throw new Error(`User with NIC number ${nicNo} has no child profiles.`);
      }*/

      const UserWithChildProfile=new UserChildProfileDto();
      UserWithChildProfile.id=user.id;
      UserWithChildProfile.fullName=user.fullName;
      UserWithChildProfile.nicNo=user.nicNo;
      UserWithChildProfile.email=user.email;
      UserWithChildProfile.contactNo=user.contactNo;
      UserWithChildProfile.userType=user.userType;
      UserWithChildProfile.childProfiles=user.childProfiles;
  
      // Return user with child profiles
  
      return UserWithChildProfile;
    } catch (error) {
      console.error('Error fetching user with child profiles:', error.message || error);
      throw new Error(error.message || 'Failed to fetch user and child profiles.');
    }
  }


  //service method for get all the childprofile of Doctor
  async getAllChildProfiles() {
    return this.prisma.childProfile.findMany();
    
  }


  //Latest changes  11/12/2024
  async getChildProfileById(childId: string, parentNic: string) {
    const childProfile = await this.prisma.childProfile.findFirst({
      where: { id: childId, parentNic },
    });

    if (!childProfile) {
      throw new NotFoundException('Child profile not found');
    }
    return childProfile;
  }


  // service method to get DOCTOr childProfile data  with pagination limit
  async getPaginatedChildProfiles(page: number, limit: number) {
    const skip = (page - 1) * limit; // Calculate the offset
    const total = await this.prisma.childProfile.count(); // Get the total count of profiles
    const childProfiles = await this.prisma.childProfile.findMany({
      skip,
      take: limit,
    });
  
    return {
      total, // Total number of profiles
      page, // Current page
      limit, // Profiles per page
      childProfiles, // Paginated profiles
    };
  }


  //This service should be provided only for the DOCTOR type of users work futher with child  profile content 
  async updateChildProfileFields(childId: string, updateFieldsDto: UpdateFieldsDto) {
    // Fetch the existing child profile
    const existingProfile = await this.prisma.childProfile.findUnique({
      where: { id: childId },
      select: {
        alergies: true,
        bornDiseases: true,
        medicalRecords: true,
        vaccinesGiven: true,
        vaccinesToBeGiven: true,
      },
    });
  
    if (!existingProfile) {
      throw new NotFoundException(`Child profile with ID ${childId} not found`);
    }
  
    // Merge existing data with the new data
    const updatedData = {
      alergies: this.mergeContent(existingProfile.alergies, updateFieldsDto.alergies),
      bornDiseases: this.mergeContent(existingProfile.bornDiseases, updateFieldsDto.bornDiseases),
      medicalRecords: this.mergeContent(existingProfile.medicalRecords, updateFieldsDto.medicalRecords),
      vaccinesGiven: this.mergeContent(existingProfile.vaccinesGiven, updateFieldsDto.vaccinesGiven),
      vaccinesToBeGiven: this.mergeContent(existingProfile.vaccinesToBeGiven, updateFieldsDto.vaccinesToBeGiven),
    };
  
    // Update the profile in the database
    return this.prisma.childProfile.update({
      where: { id: childId },
      data: updatedData,
    });
  }
  
  // Helper method to merge content
  private mergeContent(existing: string | null, newContent: string | null): string | null {
    if (!existing) return newContent; // If no existing content, return the new content
    if (!newContent) return existing; // If no new content, keep existing content
    return `${existing}, ${newContent}`; // Append new content to existing content
  }
  
  

  

}



