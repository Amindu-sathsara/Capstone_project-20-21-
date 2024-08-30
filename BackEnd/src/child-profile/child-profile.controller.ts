//child-profile.controller.ts 

import { Controller,Get,Post,Put,Delete,Body,ValidationPipe, Patch, Query } from '@nestjs/common';
import { ChildProfileService } from './child-profile.service';
import { CreateChildProfileDto } from './dto/createChildProfile';
import { FindChildProfileDto } from './dto/findChildProfile';
import { DeleteChildProfileDto } from './dto/deleteChildProfile';
import {UpdateChildProfileDto} from './dto/updateChildProfile';

@Controller('child-profile')
export class ChildProfileController {
    constructor(private readonly childProfileService: ChildProfileService) {}

    // 1.API Get request for all the childProfile data 
    // but this APi is no need to add to web page this use for mobile
    @Get()
    findAll() {
    return this.childProfileService.findAll();
    }

    // 2.API Get request for a single childProfile data 
    @Get('findoneChild')
    findOne(@Query(ValidationPipe) findChildProfileDto: FindChildProfileDto) {
    return this.childProfileService.findOne(findChildProfileDto);
    }

    // 3.API Post request to add a new childProfile
    @Post()
    async create(@Body(ValidationPipe) createChildProfileDto: CreateChildProfileDto) {
    return await this.childProfileService.create(createChildProfileDto);
    }


    // 4.API Put request to update an existing childProfile data
    @Patch('updateChildProfile')
    update(@Body(ValidationPipe) updateChildProfileDto: UpdateChildProfileDto) {
    return this.childProfileService.update(updateChildProfileDto);
    }


    // 5.API Delete request to delete a childProfile data
    @Delete('deleteChildProfile')
    delete(@Body(ValidationPipe) deleteChildProfileDto: DeleteChildProfileDto) {
    return this.childProfileService.delete(deleteChildProfileDto);
  }

}
