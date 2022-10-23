"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var sequelize_1 = require("@nestjs/sequelize");
var users_module_1 = require("./users/users.module");
var config_1 = require("@nestjs/config");
var user_model_1 = require("./users/user.model");
var auth_module_1 = require("./auth/auth.module");
var favorites_module_1 = require("./favorites/favorites.module");
var favorites_model_1 = require("./favorites/favorites.model");
var user_favorite_model_1 = require("./favorites/user-favorite.model");
var films_controller_1 = require("./films/films.controller");
var films_service_1 = require("./films/films.service");
var films_module_1 = require("./films/films.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot({
                    envFilePath: '.env'
                }),
                sequelize_1.SequelizeModule.forRoot({
                    dialect: 'postgres',
                    host: process.env.POSTGRES_HOST,
                    port: Number(process.env.POSTGRES_PORT),
                    username: process.env.POSTGRES_USER,
                    password: process.env.POSTGRES_PASSWORD,
                    database: process.env.POSTGRES_DB,
                    models: [user_model_1.User, favorites_model_1.Favorites, user_favorite_model_1.UserFavorites],
                    autoLoadModels: true
                }),
                users_module_1.UsersModule,
                auth_module_1.AuthModule,
                favorites_module_1.FavoritesModule,
                films_module_1.FilmsModule,
            ],
            controllers: [films_controller_1.FilmsController],
            providers: [films_service_1.FilmsService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
