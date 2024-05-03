import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hella World!';
  }

  test(test: string): string {
    return test;
  }
}
