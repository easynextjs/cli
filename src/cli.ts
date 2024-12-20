import { CommandFactory } from 'nest-commander';
import { AppModule } from './app.module';
import { Logger } from './logger';

async function bootstrap() {
  await CommandFactory.run(AppModule, new Logger());
}
bootstrap();
