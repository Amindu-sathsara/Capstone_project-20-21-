import { IsOptional, IsString } from 'class-validator';

export class UpdateFieldsDto {
  @IsOptional()
  @IsString()
  alergies?: string;

  @IsOptional()
  @IsString()
  bornDiseases?: string;

  @IsOptional()
  @IsString()
  medicalRecords?: string;

  @IsOptional()
  @IsString()
  vaccinesGiven?: string;

  @IsOptional()
  @IsString()
  vaccinesToBeGiven?: string;
}
//Since this DTO fields are optional using this validation I can create create One API that 
// look as different type of behaviours 
