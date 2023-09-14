import { NestFactory } from '@nestjs/core';
import { FileModule } from './file.module';
// import { Transport } from '@nestjs/microservices';
async function bootstrap() {
  // const app = await NestFactory.createMicroservice(FileModule, {
  //   transport: Transport.TCP,
  //   options: {
  //     host: '0.0.0.0',
  //     port: 3009,
  //   },
  // });
  // await app.listen();
  const app = await NestFactory.create(FileModule);
  await app.listen(3300);
}
bootstrap();

// npx nest start service-name
// npx nest start files --watch
