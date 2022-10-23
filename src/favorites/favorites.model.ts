import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../users/user.model';
import {UserFavorites} from './user-favorite.model';

type FavoriteCreationAttr = {
  name: string;
};

@Table({
  tableName: 'favorites',
})
export class Favorites extends Model<Favorites, FavoriteCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  image: string;

  @BelongsToMany(() => User, () => UserFavorites)
  owner: User[];
}
