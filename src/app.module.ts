import { Module } from '@nestjs/common';
import { BasicCommand } from './basic.command';
import { LogService } from './log.service';

@Module({
  imports: [],
  providers: [BasicCommand, LogService],
})
export class AppModule {}
