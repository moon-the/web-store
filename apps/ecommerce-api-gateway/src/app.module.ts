import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppModule1 } from './authentication/authentication.module';

@Module({
  imports: [AppModule1]
})
export class AppModule {}
