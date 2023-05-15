import { CACHE_MANAGER, CacheModule,
  Inject,
  Module,
  OnModuleInit
} from '@nestjs/common';
import { redisStore } from 'cache-manager-redis-yet';
import { Cache } from 'cache-manager';

@Module({
  imports: [
    CacheModule.registerAsync({
          useFactory: async () => {
            return {
              store: await redisStore({
                socket: {
                  host: "localhost",
                  port: 6379,
                },
              })
            };
          },
          isGlobal: true,
      }),
  ],
  exports: [
      RedisCacheModule,
  ],
})
export class RedisCacheModule implements OnModuleInit {
  constructor(
      @Inject(CACHE_MANAGER) private readonly cache: Cache
  ) {
   
  }
  public onModuleInit(): any {
      
  }
}
