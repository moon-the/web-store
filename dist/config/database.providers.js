"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const config_1 = require("@nestjs/config");
const sequelize_typescript_1 = require("sequelize-typescript");
const Bills_entity_1 = require("../models/Bills.entity");
const Carts_entity_1 = require("../models/Carts.entity");
const Categorys_entity_1 = require("../models/Categorys.entity");
const Comments_entity_1 = require("../models/Comments.entity");
const Configs_entity_1 = require("../models/Configs.entity");
const Cookies_entity_1 = require("../models/Cookies.entity");
const ExportPrices_entity_1 = require("../models/ExportPrices.entity");
const Files_entity_1 = require("../models/Files.entity");
const HomeShop_entity_1 = require("../models/HomeShop.entity");
const HomeShopProducts_entity_1 = require("../models/HomeShopProducts.entity");
const ImportPrices_entity_1 = require("../models/ImportPrices.entity");
const Intros_entity_1 = require("../models/Intros.entity");
const Messages_entity_1 = require("../models/Messages.entity");
const OldToken_entity_1 = require("../models/OldToken.entity");
const Participates_entity_1 = require("../models/Participates.entity");
const Pays_entity_1 = require("../models/Pays.entity");
const Pins_entity_1 = require("../models/Pins.entity");
const PinsProducts_entity_1 = require("../models/PinsProducts.entity");
const Products_entity_1 = require("../models/Products.entity");
const ProductsCarts_entity_1 = require("../models/ProductsCarts.entity");
const ProductsFiles_entity_1 = require("../models/ProductsFiles.entity");
const ProductsTags_entity_1 = require("../models/ProductsTags.entity");
const Replys_entity_1 = require("../models/Replys.entity");
const Roles_entity_1 = require("../models/Roles.entity");
const Rooms_entity_1 = require("../models/Rooms.entity");
const Sales_entity_1 = require("../models/Sales.entity");
const ShippingBusiness_entity_1 = require("../models/ShippingBusiness.entity");
const ShippingBusinessCarts_entity_1 = require("../models/ShippingBusinessCarts.entity");
const Shops_enity_1 = require("../models/Shops.enity");
const ShopsProducts_entity_1 = require("../models/ShopsProducts.entity");
const Tags_entity_1 = require("../models/Tags.entity");
const Transports_entity_1 = require("../models/Transports.entity");
const categorysProducts_entity_1 = require("../models/categorysProducts.entity");
const metadata_entity_1 = require("../models/metadata.entity");
const profiles_entity_1 = require("../models/profiles.entity");
const Tokens_entity_1 = require("../models/Tokens.entity");
const Untis_entity_1 = require("../models/Untis.entity");
const Users_entity_1 = require("../models/Users.entity");
const votes_entity_1 = require("../models/votes.entity");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        inject: [config_1.ConfigService],
        useFactory: async (configService) => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialect: configService.get("DB"),
                host: configService.get("DB_HOST"),
                port: configService.get("DB_PORT"),
                username: configService.get("DB_USER"),
                password: configService.get("DB_PASS"),
                database: configService.get("DB_DATABASE"),
            });
            sequelize.addModels([Roles_entity_1.Roles, Users_entity_1.Users, metadata_entity_1.MetaData, Cookies_entity_1.Cookies, Configs_entity_1.Configs, Tokens_entity_1.Token, OldToken_entity_1.OldToken, profiles_entity_1.Profile,
                Carts_entity_1.Carts, HomeShop_entity_1.HomeShops, Shops_enity_1.Shops, Products_entity_1.Products, Bills_entity_1.Bills, Categorys_entity_1.Categorys, categorysProducts_entity_1.CategorysProducts, Comments_entity_1.Comments, ExportPrices_entity_1.ExportPrices,
                ImportPrices_entity_1.ImportPrices, Files_entity_1.Files, Intros_entity_1.Intros, Messages_entity_1.Messages, Participates_entity_1.Participates, Pays_entity_1.Pays, Pins_entity_1.Pins, PinsProducts_entity_1.PinsProducts, HomeShopProducts_entity_1.HomeShopsProducts, ProductsCarts_entity_1.ProductsCarts, ProductsFiles_entity_1.ProductsFiles,
                ProductsTags_entity_1.ProductsTags, Replys_entity_1.Replys, Rooms_entity_1.Rooms, Sales_entity_1.Sales, ShippingBusiness_entity_1.ShippingBusiness, ShippingBusinessCarts_entity_1.ShippingBusinessCarts, ShopsProducts_entity_1.ShopsProducts, Tags_entity_1.Tags, Transports_entity_1.Transports, Untis_entity_1.Untis, votes_entity_1.Votes
            ]);
            await sequelize.sync();
            console.log(sequelize);
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.providers.js.map