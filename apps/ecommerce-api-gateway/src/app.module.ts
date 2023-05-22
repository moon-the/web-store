import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
=======
import { AppModule1 } from './authentication/authentication.module';

@Module({
  imports: [AppModule1]
>>>>>>> main
})
export class AppModule {}
