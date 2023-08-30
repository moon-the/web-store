import { NestFactory } from '@nestjs/core';
import { FileModule } from './file.module';
import { Transport } from '@nestjs/microservices';
async function bootstrap() {
  const app = await NestFactory.createMicroservice(FileModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: 3009,
    },
  });
  await app.listen();
}
bootstrap();
