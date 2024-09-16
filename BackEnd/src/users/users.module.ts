import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]          //When I am start working on user authentication implemmentation there I need to userService inside the auth service that' what I export user Service from here...
})
export class UsersModule {}
