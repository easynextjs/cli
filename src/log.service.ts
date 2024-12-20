import { Logger } from '@nestjs/common';

import { Injectable } from '@nestjs/common';

@Injectable()
export class LogService {
  log(message: any) {
    console.log(message);
  }
}
