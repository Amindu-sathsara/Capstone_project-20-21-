import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ChildProfileModule } from './child-profile/child-profile.module';

@Module({
  imports: [UsersModule, AuthModule, ChildProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
