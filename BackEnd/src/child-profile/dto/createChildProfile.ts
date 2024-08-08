import { IsEmail,IsEnum,IsString,IsNotEmpty} from "class-validator";

export class CreateChildProfileDto{

    @IsString()
    @IsNotEmpty()
    fullName:string;

    @IsString()
    @IsNotEmpty()
    birthWeight:string;

    @IsString()
    @IsNotEmpty()
    birthHeight:string;

    @IsString()
    @IsNotEmpty()
    alergies:string;

    @IsString()
    @IsNotEmpty()
    bornDieseases:string;

    @IsString()
    @IsNotEmpty()
    medicalRecords:string;

    @IsString()
    @IsNotEmpty()
    vaccinesGiven:string;

    @IsString()
    @IsNotEmpty()
    vaccinesToBeGiven:string;

    @IsString()
    @IsNotEmpty()
    parentNic:string;  // this is the foreign key to the parent table  // here I assumed parentNic is a string , if it's a number you need to change the type here as well.  // also you need to add a relationship between parent and child in the parent model.  // you can use @ManyToMany and @JoinTable to achieve this.  // you also need to create a @OneToOne relationship between parent and child in the child model.  // you can use @JoinColumn to achieve this.  // also you need to create a @BeforeInsert or @BeforeUpdate hook in the child model to set the parentNic.  // you also need to create a @BeforeInsert or @BeforeUpdate hook in the parent model to update the childrenNics.  // you also need to create a @BeforeInsert or @BeforeUpdate hook in the child model to update the parentsNic

    

}

/*id String @id @map("_id") @db.ObjectId
  fullName String
  birthWeight String
  birthHeight String
  alergies String  
  bornDieseases String
  medicalRecords String
  vaccinesGiven String
  vaccinesToBeGiven String
  parentNic String @unique*/