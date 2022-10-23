import { Column, DataType, Model, Table } from 'sequelize-typescript';

type UserCreationAttr = {
  email: string;
  password: string;
};

@Table({
  tableName: 'users',
})
export class User extends Model<User, UserCreationAttr> {
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
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;


  @Column({
    type: DataType.ARRAY(DataType.INTEGER),
    allowNull: false
  })
  favorites: number[]
}
