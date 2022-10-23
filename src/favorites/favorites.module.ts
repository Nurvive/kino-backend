import { Module } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { FavoritesController } from './favorites.controller';
import { User } from '../users/user.model';
import { UserFavorites } from './user-favorite.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  providers: [FavoritesService],
  controllers: [FavoritesController],
  imports: [SequelizeModule.forFeature([User, UserFavorites])]
})
export class FavoritesModule {}
