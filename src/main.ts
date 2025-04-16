import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const morgan = require('morgan');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan('dev')); // Use morgan middleware for logging
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
