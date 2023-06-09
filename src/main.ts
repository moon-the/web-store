import { ValidationPipe } from '@nestjs/common/pipes';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookiePaser from "cookie-parser";
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AuthService } from './Services/Auth.service';

async function bootstrap() {
  AuthService.generateKey();
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(cookiePaser());
  app.useStaticAssets(join(__dirname, '..', '/src/public'));
  app.setBaseViewsDir(join(__dirname, '..', '/src/views'));
  app.setViewEngine("ejs");
  await app.listen(3000);
}
bootstrap();
