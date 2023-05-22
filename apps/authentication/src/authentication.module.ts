import { Module } from '@nestjs/common';
import { AuthenticationController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { DatabaseModule } from './config/database.module';
import { ConfigModule } from '@nestjs/config';
import type { RedisClientOptions } from 'redis';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
@Module({
  imports: [DatabaseModule, ConfigModule.forRoot({
    isGlobal: true,
  }), CacheModule.registerAsync<RedisClientOptions>({
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
  })],
  controllers: [AuthenticationController],
  providers: [AuthenticationService],
})
export class AuthenticationModule { }
