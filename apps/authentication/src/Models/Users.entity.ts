import {
  Table,
  Column,
  Model,
  PrimaryKey,
  Unique,
  AllowNull,
  Length,
  HasMany,
  HasOne,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
  Default,
} from 'sequelize-typescript';
import { OldToken } from './OldToken.entity';
import { Profile } from './Profiles.entity';
import { Token } from './Tokens.entity';
import { Roles } from './Roles.entity';

@Table
export class Users extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Unique
  @AllowNull(false)
  @Column
  userName: string;

  @Length({ min: 8 })
  @AllowNull(false)
  @Column
  password: string;

  @Unique
  @AllowNull(false)
  @Column
  email: string;

  @AllowNull(false)
  @Column
  @Default(false)
  activated: boolean;

  @HasOne(() => Profile)
  profile: Profile;

  @HasMany(() => Token)
  token: Token[];

  @HasMany(() => OldToken)
  oldToken: OldToken[];

  @AllowNull(true)
  @ForeignKey(() => Roles)
  @Column
  idRole: number;

  @BelongsTo(() => Roles)
  role: Roles;
}
