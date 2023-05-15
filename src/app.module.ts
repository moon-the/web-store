import { Module } from '@nestjs/common';
import type { RedisClientOptions } from 'redis';
import { redisStore } from 'cache-manager-redis-yet';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Users } from './models/Users.entity';
import { DatabaseModule } from './config/database.module';
import { UserRepository } from './Repositories/UserRepository';
import { UserService } from './Services/UserService';
import { SearchModule } from './search/search.module';
import { FileModule } from './App/Http/Controllers/Module/File.module';
import { ChatModule } from './App/Http/Controllers/Module/chat.module';
import { ConfigModule } from '@nestjs/config';
// import { AuthModule } from './App/Http/Controllers/Module/Auth.module';
import { AuthAPIModule } from './api/Module/Auth.module';
import { HomeModule } from './App/Http/Controllers/Module/Home.module';
import { CacheModule } from '@nestjs/cache-manager';
import { UsersAPIModule } from './api/Module/Users.module';
@Module({
  imports: [DatabaseModule, CacheModule.registerAsync<RedisClientOptions>({
    useFactory: async () => {
      return {
        store: await redisStore({
          socket: {
            host: "localhost",
            port: 6379,
          }
        }),
      };
    },
    isGlobal: true,
  }), SearchModule, HomeModule, AuthAPIModule, FileModule, ConfigModule.forRoot({
    isGlobal: true,
  }), UsersAPIModule],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {
  
}
