import { CreateChildProfileDto } from './createChildProfile';

import {PartialType} from "@nestjs/mapped-types";  

export class UpdateChildProfileDto extends PartialType(CreateChildProfileDto){}