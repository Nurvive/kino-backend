import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../users/user.model';
import { Favorites } from './favorites.model';

@Table({
  tableName: 'user_favorites', createdAt: false, updatedAt: false
})
export class UserFavorites extends Model<UserFavorites> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @ForeignKey(() => Favorites)
  @Column({
    type: DataType.INTEGER,
  })
  favoriteId: number;
}
