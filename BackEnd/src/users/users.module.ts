import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { ChildProfileModule } from 'src/child-profile/child-profile.module';
@Module({
  imports: [ChildProfileModule],  
  controllers: [UsersController],
  providers: [UsersService,PrismaService],
  exports:[UsersService]          //When I am start working on user authentication implemmentation there I need to userService inside the auth service that' what I export user Service from here...
})
export class UsersModule {}
