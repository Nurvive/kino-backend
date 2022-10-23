"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Favorites = void 0;
var sequelize_typescript_1 = require("sequelize-typescript");
var user_model_1 = require("../users/user.model");
var user_favorite_model_1 = require("./user-favorite.model");
var Favorites = /** @class */ (function (_super) {
    __extends(Favorites, _super);
    function Favorites() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, sequelize_typescript_1.Column)({
            type: sequelize_typescript_1.DataType.INTEGER,
            autoIncrement: true,
            unique: true,
            primaryKey: true
        })
    ], Favorites.prototype, "id");
    __decorate([
        (0, sequelize_typescript_1.Column)({
            type: sequelize_typescript_1.DataType.STRING,
            unique: true,
            allowNull: false
        })
    ], Favorites.prototype, "name");
    __decorate([
        (0, sequelize_typescript_1.Column)({
            type: sequelize_typescript_1.DataType.STRING
        })
    ], Favorites.prototype, "image");
    __decorate([
        (0, sequelize_typescript_1.BelongsToMany)(function () { return user_model_1.User; }, function () { return user_favorite_model_1.UserFavorites; })
    ], Favorites.prototype, "owner");
    Favorites = __decorate([
        (0, sequelize_typescript_1.Table)({
            tableName: 'favorites'
        })
    ], Favorites);
    return Favorites;
}(sequelize_typescript_1.Model));
exports.Favorites = Favorites;
