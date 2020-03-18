import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getPost() {
    return {
      content: 'Hello World',
      startDate: new Date(),
      endDate: new Date(),
      version: 1,
    };
  }
}
