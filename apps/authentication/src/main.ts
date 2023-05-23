import { NestFactory } from '@nestjs/core';
import { AuthenticationModule } from './authentication.module';
import {Transport} from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AuthenticationModule, {
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 3001
    }
  });
  await app.listen();
}
bootstrap();
