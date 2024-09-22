import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! 好煩喔, Hello World 也要寫兩個地方';
  }
}
