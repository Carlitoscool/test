"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const products_controller_1 = require("./products/products.controller");
const shopping_cart_controller_1 = require("./shopping-cart/shopping-cart.controller");
const products_service_1 = require("./products/products.service");
const shopping_cart_service_1 = require("./shopping-cart/shopping-cart.service");
const products_module_1 = require("./products/products.module");
const shopping_cart_module_1 = require("./shopping-cart/shopping-cart.module");
const logger_service_1 = require("./logger/logger.service");
const logger_module_1 = require("./logger/logger.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [products_module_1.ProductsModule, shopping_cart_module_1.ShoppingCartModule, logger_module_1.LoggerModule],
        controllers: [app_controller_1.AppController, products_controller_1.ProductsController, shopping_cart_controller_1.ShoppingCartController],
        providers: [
            app_service_1.AppService,
            products_service_1.ProductsService,
            shopping_cart_service_1.ShoppingCartService,
            logger_service_1.LoggerService
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map