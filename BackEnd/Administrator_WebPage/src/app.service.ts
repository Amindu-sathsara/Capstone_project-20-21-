import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'My name is Senan demika,I am 11 years old, My school is Pallekand national school';
  }
}
