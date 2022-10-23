import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepo: typeof User) {}

  async createUser(dto: CreateUserDto) {
    return await this.userRepo.create(dto);
  }

  async getAllUsers() {
    return await this.userRepo.findAll();
  }

  async getUserByEmail(email: string) {
    return await this.userRepo.findOne({
      where: { email },
      include: { all: true },
    });
  }

  async updateFavorites(userId: number, filmId: number) {
    const user = await this.userRepo.findOne({
      where: { id: userId },
      include: { all: true },
    });
    if (user.favorites.includes(filmId)) {
      return await user.update({
        favorites: [...user.favorites.filter((id) => id !== filmId)],
      });
    }
    return await user.update({ favorites: [...user.favorites, filmId] });
  }
}
