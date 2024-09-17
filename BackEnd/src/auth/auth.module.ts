import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from './configs/jwt-secret';




@Module({
  controllers: [AuthController],
  providers: [AuthService],

  //Import Users Module
  imports: [
    UsersModule,
  JwtModule.register({
    secret:JWT_SECRET,
    signOptions: { expiresIn: '10m' }, // 1 hour token expiration

  })]
})
export class AuthModule {}
