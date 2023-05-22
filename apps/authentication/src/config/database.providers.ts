import { ConfigModule, ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
import { Cookies } from '../Models/Cookies.entity';
import { MetaData } from '../Models/MetaData.entity';
import { OldToken } from '../Models/OldToken.entity';
import { Profile } from '../Models/Profiles.entity';
import { Roles } from '../Models/Roles.entity';
import { Token } from '../Models/Tokens.entity';
import { Users } from '../Models/Users.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const sequelize = new Sequelize({
        dialect: configService.get("DB"),
        host: configService.get<string>("DB_HOST"),
        port: configService.get<number>("DB_PORT"),
        username: configService.get<string>("DB_USER"),
        password: configService.get<string>("DB_PASS"),
        database: configService.get<string>("DB_DATABASE"),
      });
      sequelize.addModels([Cookies, MetaData, OldToken, Profile, Roles, Token, Users
      ]);
      await sequelize.sync();
      console.log(sequelize)
      return sequelize;
    },
  },
];