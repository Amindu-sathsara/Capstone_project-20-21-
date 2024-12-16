//child-profile.controller.ts 



import { Controller,Get,Post,Put,Delete,Body,ValidationPipe, Query, Patch } from '@nestjs/common';


import { ChildProfileService } from './child-profile.service';
import { CreateChildProfileDto } from './dto/createChildProfile';
import { FindChildProfileDto } from './dto/findChildProfile';
import { DeleteChildProfileDto } from './dto/deleteChildProfile';
import {UpdateChildProfileDto} from './dto/updateChildProfile';

@Controller('child-profile')
export class ChildProfileController {
    constructor(private readonly childProfileService: ChildProfileService) {}
    //public apis for web page
    // 1.API Get request for all the childProfile data 
    // but this APi is no need to add to web page this use for mobile
    @Get()
    async findAll() {
    const a=await this.childProfileService.findAll();
    return a;
    }

    // 2.API Get request for a single childProfile data 
    @Get('findoneChild')
    async findOne(@Query(ValidationPipe) findChildProfileDto: FindChildProfileDto):Promise<any> {
    const x=await this.childProfileService.findOne(findChildProfileDto);
    return x;
    }

    // 3.API Post request to add a new childProfile
    @Post()
    async create(@Body(ValidationPipe) createChildProfileDto: CreateChildProfileDto) {
    const y=await this.childProfileService.create(createChildProfileDto);

    }


    // 4.API Put request to update an existing childProfile data

    @Patch('updateChildProfile')
    async update(@Body(ValidationPipe) updateChildProfileDto: UpdateChildProfileDto) {
    const b=await this.childProfileService.update(updateChildProfileDto);
    return b;
    }


    // 5.API Delete request to delete a childProfile data
    @Delete('deleteChildProfile')
    async delete(@Body(ValidationPipe) deleteChildProfileDto: DeleteChildProfileDto) {
    const c=await this.childProfileService.delete(deleteChildProfileDto);
    return c;
  }

}
