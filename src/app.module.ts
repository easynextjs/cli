import { Module } from '@nestjs/common';
import { BasicCommand } from './basic.command';
import { commandModules } from './commands';
import { LoggerModule } from './logger';

@Module({
  imports: [...commandModules, LoggerModule],
  providers: [BasicCommand],
})
export class AppModule {}
