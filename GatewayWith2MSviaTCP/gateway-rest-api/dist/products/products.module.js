"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModule = void 0;
const common_1 = require("@nestjs/common");
const ms_products_client_service_1 = require("./ms-products-client.service");
const config_1 = require("@nestjs/config");
const logger_service_1 = require("../logger/logger.service");
const microservices_1 = require("@nestjs/microservices");
const products_controller_1 = require("./products.controller");
let ProductsModule = class ProductsModule {
};
ProductsModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot(),
            microservices_1.ClientsModule.register([{
                    name: 'GATEWAY-REST-API',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: process.env.MS_PRODUCTS_ADDRESS,
                        port: parseInt(process.env.MS_PRODUCTS_PORT),
                    }
                }])
        ],
        providers: [ms_products_client_service_1.MsProductsClient, logger_service_1.LoggerService],
        controllers: [products_controller_1.ProductsController]
    })
], ProductsModule);
exports.ProductsModule = ProductsModule;
//# sourceMappingURL=products.module.js.map