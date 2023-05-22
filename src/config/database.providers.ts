<<<<<<< HEAD
=======
import { ConfigModule, ConfigService } from '@nestjs/config';
>>>>>>> 3adb92c4f1a8bb416577d7500428ec553160f826
import { Sequelize } from 'sequelize-typescript';
import { Bills } from 'src/models/Bills.entity';
import { Carts } from 'src/models/Carts.entity';
import { Categorys } from 'src/models/Categorys.entity';
import { Comments } from 'src/models/Comments.entity';
import { Configs } from 'src/models/Configs.entity';
import { Cookies } from 'src/models/Cookies.entity';
import { ExportPrices } from 'src/models/ExportPrices.entity';
import { Files } from 'src/models/Files.entity';
import { HomeShops } from 'src/models/HomeShop.entity';
<<<<<<< HEAD
=======
import { HomeShopsProducts } from 'src/models/HomeShopProducts.entity';
>>>>>>> 3adb92c4f1a8bb416577d7500428ec553160f826
import { ImportPrices } from 'src/models/ImportPrices.entity';
import { Intros } from 'src/models/Intros.entity';
import { Messages } from 'src/models/Messages.entity';
import { OldToken } from 'src/models/OldToken.entity';
import { Participates } from 'src/models/Participates.entity';
import { Pays } from 'src/models/Pays.entity';
import { Pins } from 'src/models/Pins.entity';
import { PinsProducts } from 'src/models/PinsProducts.entity';
import { Products } from 'src/models/Products.entity';
import { ProductsCarts } from 'src/models/ProductsCarts.entity';
import { ProductsFiles } from 'src/models/ProductsFiles.entity';
import { ProductsTags } from 'src/models/ProductsTags.entity';
import { Replys } from 'src/models/Replys.entity';
import { Roles } from 'src/models/Roles.entity';
import { Rooms } from 'src/models/Rooms.entity';
import { Sales } from 'src/models/Sales.entity';
import { ShippingBusiness } from 'src/models/ShippingBusiness.entity';
import { ShippingBusinessCarts } from 'src/models/ShippingBusinessCarts.entity';
import { Shops } from 'src/models/Shops.enity';
import { ShopsProducts } from 'src/models/ShopsProducts.entity';
import { Tags } from 'src/models/Tags.entity';
import { Transports } from 'src/models/Transports.entity';
import { CategorysProducts } from 'src/models/categorysProducts.entity';
import { MetaData } from 'src/models/metadata.entity';
import { Profile } from 'src/models/profiles.entity';
<<<<<<< HEAD
import { Token } from 'src/models/token.entity';
import { Untis } from 'src/models/untis.entity';
import { Users } from 'src/models/users.entity';
=======
import { Token } from 'src/models/Tokens.entity';
import { Untis } from 'src/models/Untis.entity';
import { Users } from 'src/models/Users.entity';
>>>>>>> 3adb92c4f1a8bb416577d7500428ec553160f826
import { Votes } from 'src/models/votes.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
<<<<<<< HEAD
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'ecommerce',
        // models: [__dirname.replace("\\config", '\\models')],
        // modelMatch: (filename, member) => {
        //   return filename.substring(0, filename.indexOf('.entity')) === member.toLowerCase();
        // },
      });
      sequelize.addModels([Roles, Users, MetaData, Cookies,  Configs, Token, OldToken, Profile, 
        Carts, HomeShops, Shops, Products, Bills, Categorys, CategorysProducts, Comments, ExportPrices,
        ImportPrices, Files,Intros, Messages, Participates, Pays, Pins, PinsProducts, ProductsCarts, ProductsFiles,
=======
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
      sequelize.addModels([Roles, Users, MetaData, Cookies,  Configs, Token, OldToken, Profile, 
        Carts, HomeShops, Shops, Products, Bills, Categorys, CategorysProducts, Comments, ExportPrices,
        ImportPrices, Files,Intros, Messages, Participates, Pays, Pins, PinsProducts, HomeShopsProducts, ProductsCarts, ProductsFiles,
>>>>>>> 3adb92c4f1a8bb416577d7500428ec553160f826
        ProductsTags, Replys, Rooms, Sales, ShippingBusiness, ShippingBusinessCarts, ShopsProducts, Tags, Transports, Untis, Votes
      ]);
      //sequelize.addModels([__dirname +  '../models']);
      await sequelize.sync();
      console.log(sequelize)
      return sequelize;
    },
  },
];