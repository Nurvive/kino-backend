import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UsersService } from './users.service';
import { UpdateFavoritesDto } from './dto/updateFavorites.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  @Get()
  getOneUser(@Body() email: string) {
    return this.userService.getUserByEmail(email);
  }

  @Put()
  updateFavorites(@Body() update: UpdateFavoritesDto) {
    return this.userService.updateFavorites(update.userId, update.filmId);
  }
}
