

//child-profile.service.ts 

import { PrismaClient } from '@prisma/client';
import { Injectable,NotFoundException } from '@nestjs/common';
import { CreateChildProfileDto } from './dto/createChildProfile';
import { UpdateChildProfileDto } from './dto/updateChildProfile';
import { FindChildProfileDto } from './dto/findChildProfile';
import { DeleteChildProfileDto } from './dto/deleteChildProfile';
/*@Injectable()
export class ChildProfileService {
    private prisma = new PrismaClient();
    
  // Service for creating a new childProfile
  async create(createChildProfileDto: CreateChildProfileDto) {
    try {
      // Check if a child profile with the same parentNic already exists
      const existingChildProfile = await this.prisma.childProfile.findUnique({
        where: { parentNic: createChildProfileDto.parentNic },
      });

      if (existingChildProfile) {
        throw new Error('That child profile is already created with this parentNic.');
      }

      // Create the new child profile if no duplicate is found
      return await this.prisma.childProfile.create({
        data: {
          fullName: 'Child two',
          gender: 'male',
          birthDate: '21/01/2015',
          birthPlace: 'Walasmulla',
          birthWeight: '10kg',
          birthHeight: '120cm',
          alergies: 'Alergies one',
          bornDiseases: 'Dieseases one',
          medicalRecords: 'Medical records One ',
          vaccinesGiven: 'vaccine one, vaccine two ,vaccine three',
          vaccinesToBeGiven: 'Vaccines 4,Vaccine 5,vaccine 6',
          parentNic: '232412423212'
      }
        
        
      });
    } catch (error) {
      // Log the error and throw a specific error message
      console.error('Error creating child profile:', error.message || error);
      throw new Error(error.message || 'Internal Server Error');
    }
  }*/

  @Injectable()
  export class ChildProfileService {
    private prisma = new PrismaClient();

    //Service Method for getting all the childProfile
    //But this APIs is need to add With mobile App
    async findAll() {
      return this.prisma.childProfile.findMany();
    }


    //FindOne childProfileDto 
    async findOne(findChildProfileDto: FindChildProfileDto) {
      const childProfile = await this.prisma.childProfile.findFirst({
          where: {
              fullName: findChildProfileDto.fullName,
              parentNic: findChildProfileDto.parentNic
              
          },
      });

      if (!childProfile) {
          throw new NotFoundException('ChildProfile  with the provided details not found');
      }

      return childProfile;
  }
  
  
    // Service for creating a new childProfile
    async create(createChildProfileDto: CreateChildProfileDto) {
      try {
        // Check if the childProfile is  already exists ..
        /*const existingChildProfile = await this.prisma.childProfile.findUnique({
          where: { parentNic: createChildProfileDto.parentNic },
        });*/
        const existingChildProfile = await this.prisma.childProfile.findFirst({
          where: {
            parentNic: createChildProfileDto.parentNic,
            fullName: createChildProfileDto.fullName,
          },
        });
    
        if (existingChildProfile) {
          throw new Error('This childProfile is already exists ');
        }
    
        // Create the new user if no duplicate is found
        return await this.prisma.childProfile.create({
          data: {
            fullName: createChildProfileDto.fullName,
            gender: createChildProfileDto.gender,
            birthDate: createChildProfileDto.birthDate,
            birthPlace: createChildProfileDto.birthPlace,
            birthWeight: createChildProfileDto.birthWeight,
            birthHeight: createChildProfileDto.birthHeight,
            alergies: createChildProfileDto.alergies,
            bornDiseases: createChildProfileDto.bornDiseases,
            medicalRecords: createChildProfileDto.medicalRecords,
            vaccinesGiven: createChildProfileDto.vaccinesGiven,
            vaccinesToBeGiven: createChildProfileDto.vaccinesToBeGiven,
            parentNic: createChildProfileDto.parentNic,
          },
        });
      } catch (error) {
        // Log the error and throw a specific error message
        console.error('Error creating user:', error.message || error);
        throw new Error(error.message || 'Can not create child profile with provided details');
      }
  }

  //upadate childProfile method should write here...  :to find which document is updating :use fullName and parentNic 
  async update(updateChildProfileDto: UpdateChildProfileDto) {
    // Check if the childProfile is  exists based on fullName and nicNo  (checked Both)
    const childProfile = await this.prisma.childProfile.findFirst({
      where: {
        fullName: updateChildProfileDto.fullName,
        parentNic: updateChildProfileDto.parentNic,
      },
    });

    if (!childProfile) {
      throw new NotFoundException('ChildProfile is not exists with that fullName and parentNic');
    }

    // Update the childProfile  details: since that fullName+parentNic is there...
    return await this.prisma.childProfile.update({
      where: {
        id: childProfile.id,
      },
      data: updateChildProfileDto,  // This will update all fields present in updateUserDto
    });
}



  // Delete childProfile method should write here...
  async delete(deleteChildProfileDto: DeleteChildProfileDto) {
    // Find the ChildProfile to ensure it exists before deletion
    const childProfile = await this.prisma.childProfile.findFirst({
      where: {
        fullName: deleteChildProfileDto.fullName,
        parentNic: deleteChildProfileDto.parentNic,
      },
    });

    if (!childProfile) {
      throw new NotFoundException('User with the provided details not found');
    }

    // Delete the user
    await this.prisma.childProfile.delete({
      where: {
        id: childProfile.id,
      },
    });

    return { message: 'The relelvant childPrile is  successfully deleted' };
  }


  // From this onwards this contains both user+ childProfile relation APIs only ....
  async findChildProfilesByParentNic(parentNic: string) {
    return this.prisma.childProfile.findMany({
      where: { parentNic },
    });
  }
}


    






