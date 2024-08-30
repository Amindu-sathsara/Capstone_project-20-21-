import { IsEmail,IsEnum,IsString,IsNotEmpty} from "class-validator";

export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    fullName:string ;

    @IsString()
    @IsNotEmpty()
    nicNo:string ;

    @IsEmail()
    @IsEmail()
    email:string;

    @IsString()
    @IsNotEmpty()
    contactNo:string;

    @IsEnum(["DOCTOR","PARENT"],{
        message: "User Type must be DOCTOR or PARENT"  //This is giving some custome massage , if roles are not obne of this

    })
    userType:("DOCTOR"|"PARENT");

    @IsString()
    @IsNotEmpty()
    userName:string;

    @IsString()
    @IsNotEmpty()
    password:string;
}


// this is the front end form to create new user .....
/*const [fullName, setFullName] = useState('');
const [nicNo, setNicNo] = useState('');
const [email, setEmail] = useState('');
const [contactNo, setContactNo] = useState('');
const [userType, setUserType] = useState('');
const [errors, setErrors] = useState({});*/