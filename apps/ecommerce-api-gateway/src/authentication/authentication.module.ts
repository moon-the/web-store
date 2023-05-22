import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
<<<<<<< HEAD
=======
import { AuthenticationController } from './authentication.controller';
>>>>>>> main


@Module({
  imports: [
    ClientsModule.register([
        {
            name: 'AUTHENTICATION',
            transport: Transport.TCP,
            options: {
<<<<<<< HEAD
                host: '127.0.0.1',
                port: 3301
=======
                host: 'localhost',
                port: 3001
>>>>>>> main
            }
        }
    ])
  ],
<<<<<<< HEAD
  controllers: [],
  providers: [],
})
export class AppModule {}
=======
  controllers: [AuthenticationController],
  providers: [],
})
export class AppModule1 {}
>>>>>>> main
