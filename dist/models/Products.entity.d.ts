import { Model } from 'sequelize-typescript';
import { Shops } from './Shops.enity';
import { Categorys } from './Categorys.entity';
import { Intros } from './Intros.entity';
import { ExportPrices } from './ExportPrices.entity';
import { ImportPrices } from './ImportPrices.entity';
import { Pins } from './Pins.entity';
import { Files } from './Files.entity';
import { Carts } from './Carts.entity';
import { Tags } from './Tags.entity';
import { Untis } from './Untis.entity';
import { HomeShops } from './HomeShop.entity';
export declare class Products extends Model {
    id: number;
    name: string;
    shops: Shops[];
    categorys: Categorys[];
    idIntro: number;
    intro: Intros;
    idUntis: number;
    untis: Untis;
    exportPrice: ExportPrices[];
    importPrice: ImportPrices[];
    pins: Pins[];
    files: Files[];
    carts: Carts[];
    tags: Tags[];
    homeShops: HomeShops[];
}
