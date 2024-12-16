import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from './configs/jwt-secret';
import { ChildProfileModule } from 'src/child-profile/child-profile.module';



@Module({
  controllers: [AuthController],
  providers: [AuthService],

  //Import Users Module
  imports: [
    UsersModule,ChildProfileModule,
  JwtModule.register({
    secret:JWT_SECRET,
    signOptions: { expiresIn: '30m' }, // 10 min token expiration

  })]
})
export class AuthModule {}
