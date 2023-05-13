import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { Users } from './models/users.entity';
=======
import { Users } from './models/Users.entity';
>>>>>>> 3adb92c4f1a8bb416577d7500428ec553160f826
import { DatabaseModule } from './config/database.module';
import { UserRepository } from './Repositories/UserRepository';
import { UserService } from './Services/UserService';
import { SearchModule } from './search/search.module';
import { FileController } from './App/Http/Controllers/File.controller';
import { FileModule } from './App/Http/Controllers/Module/File.module';
import { ChatModule } from './App/Http/Controllers/Module/chat.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './App/Http/Controllers/Module/Auth.module';
import { AuthAPIModule } from './api/Module/Auth.module';
import { HomeModule } from './App/Http/Controllers/Module/Home.module';

@Module({
<<<<<<< HEAD
  imports: [DatabaseModule, SearchModule,HomeModule, AuthModule,AuthAPIModule, FileModule, ConfigModule.forRoot({
    isGlobal: true,
  })],
=======
  imports: [SearchModule,HomeModule, AuthModule,AuthAPIModule, FileModule, ConfigModule.forRoot({
    isGlobal: true,
  }), DatabaseModule],
>>>>>>> 3adb92c4f1a8bb416577d7500428ec553160f826
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
