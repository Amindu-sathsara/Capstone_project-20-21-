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
