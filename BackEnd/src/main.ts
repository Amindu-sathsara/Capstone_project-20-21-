/*import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();*/


// Adding relavent needs things to main.ts to connect with fornt end using axios 
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configure CORS options
  const corsOptions: CorsOptions = {
    origin: 'http://localhost:3001', // Allow requests from this origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true, // Allow cookies and other credentials to be sent
    allowedHeaders: 'Content-Type, Authorization',
  };

  app.enableCors(corsOptions); // Enable CORS with the specified options
  await app.listen(3000);
}
bootstrap();


//Public API for web page.........................

/*                 users crud operations
1.create new user: localhost:3000/users
2.get all users: localhost:3000/users
3.get single user: localhost:3000/users/:id
4.update user: localhost:3000/users/:id
5.delete user: localhost:3000/users/:id
*/

//                childProfile crud operations

/*
1.create new childProfile: localhost:3000/childProfile
2.get all childProfile: localhost:3000/childProfile
3.get single childProfile: localhost:3000/childProfile/:id
4.update childProfile: localhost:3000/childProfile/:id
5.delete childProfile: localhost:3000/childProfile/:id
*/










//All the authentications and the protected API  concepts come over here....


//    Mobile Applications related details .....

/*  
1.interface1-click on login navigate to interface2- no need backend stuff
2.login interface- localhost:3000/auth/login     ---Here How to navigate this to users home page interface



3.interface 3- change password
4.interface 4- forgot password

*/




// Doctors view- from  the interface (Home page )

/*
 1.interface(5)- (there display all the childProfile)
                What we need to be done :then it display four icon of feactures

 2.Interface(6)-a.               
*/
