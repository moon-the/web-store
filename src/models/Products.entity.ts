import { Table, Column, Model, PrimaryKey, Unique, AllowNull, ForeignKey, BelongsTo, AutoIncrement, BelongsToMany, HasMany } from 'sequelize-typescript';
import { Shops } from './Shops.enity';
import { ShopsProducts } from './ShopsProducts.entity';
import { Categorys } from './Categorys.entity';
import { CategorysProducts } from './categorysProducts.entity';
import { Intros } from './Intros.entity';
import { ExportPrices } from './ExportPrices.entity';
import { ImportPrices } from './ImportPrices.entity';
import { Pins } from './Pins.entity';
import { PinsProducts } from './PinsProducts.entity';
import { Files } from './Files.entity';
import { ProductsFiles } from './ProductsFiles.entity';
import { Carts } from './Carts.entity';
import { ProductsCarts } from './ProductsCarts.entity';
import { Tags } from './Tags.entity';
import { ProductsTags } from './ProductsTags.entity';
import { Untis } from './untis.entity';

@Table
export class Products extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @AllowNull(false)
    @Column
    name: string;

    @BelongsToMany(() => Shops, () => ShopsProducts)
    shops: Shops[];

    @BelongsToMany(() => Categorys, () => CategorysProducts)
    categorys: Categorys[];

    @ForeignKey(()=> Intros)
    @Column
    idIntro: number;

    @BelongsTo(()=> Intros)
    intro: Intros;

    @ForeignKey(()=> Untis)
    @Column
    idUntis: number;

    @BelongsTo(()=> Untis)
    untis: Untis;

    @HasMany(()=> ExportPrices)
    exportPrice: ExportPrices[];

    @HasMany(()=> ImportPrices)
    importPrice: ImportPrices[];

    @BelongsToMany(() => Pins, () => PinsProducts)
    pins: Pins[];

    @BelongsToMany(() => Files, () => ProductsFiles)
    files: Files[];

    @BelongsToMany(() => Carts, () => ProductsCarts)
    carts: Carts[];

    @BelongsToMany(() => Tags, () => ProductsTags)
    tags: Tags[];
}