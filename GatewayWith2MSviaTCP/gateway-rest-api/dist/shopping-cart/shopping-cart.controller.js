"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCartController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_shopping_cart_1 = require("../dtos/create-shopping-cart");
const product_dto_1 = require("../dtos/product.dto");
const logger_service_1 = require("../logger/logger.service");
const shopping_cart_dto_1 = require("../dtos/shopping-cart.dto");
const ms_shopping_cart_client_service_1 = require("./ms-shopping-cart-client.service");
let ShoppingCartController = class ShoppingCartController {
    constructor(msShoppingCartClient, logger) {
        this.msShoppingCartClient = msShoppingCartClient;
        this.logger = logger;
    }
    async create(shoopingCart) {
        this.logger.debug('Create shopping cart Endpoint');
        return this.msShoppingCartClient.create(shoopingCart);
    }
    async delete(shoppingCartId) {
        this.logger.debug('Delete shopping cart Endpoint');
        return this.msShoppingCartClient.delete(shoppingCartId);
    }
    async findById(shoppingCartId) {
        this.logger.debug('Get shopping cart by id Endpoint');
        return this.msShoppingCartClient.findById(shoppingCartId);
    }
    async addProduct(shoppingCartId, productId) {
        this.logger.debug('Add product to shopping cart Endpoint');
        return this.msShoppingCartClient.addProduct(shoppingCartId, productId);
    }
    async removeProduct(shoppingCartId, productId) {
        this.logger.debug('Remove product product to shopping cart Endpoint');
        return this.msShoppingCartClient.removeProduct(shoppingCartId, productId);
    }
};
__decorate([
    swagger_1.ApiCreatedResponse({ type: shopping_cart_dto_1.ShoppingCartDTO }),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_shopping_cart_1.CreateShoppingCartDTO]),
    __metadata("design:returntype", Promise)
], ShoppingCartController.prototype, "create", null);
__decorate([
    swagger_1.ApiOkResponse({ type: shopping_cart_dto_1.ShoppingCartDTO }),
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ShoppingCartController.prototype, "delete", null);
__decorate([
    swagger_1.ApiOkResponse({ type: shopping_cart_dto_1.ShoppingCartDTO }),
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ShoppingCartController.prototype, "findById", null);
__decorate([
    swagger_1.ApiOkResponse({ type: shopping_cart_dto_1.ShoppingCartDTO }),
    common_1.Put(':id/addProduct/:productId'),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ShoppingCartController.prototype, "addProduct", null);
__decorate([
    swagger_1.ApiOkResponse({ type: shopping_cart_dto_1.ShoppingCartDTO }),
    common_1.Put(':id/removeProduct/:productId'),
    __param(0, common_1.Param('id')), __param(1, common_1.Param('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ShoppingCartController.prototype, "removeProduct", null);
ShoppingCartController = __decorate([
    common_1.Controller('shopping-carts'),
    __metadata("design:paramtypes", [ms_shopping_cart_client_service_1.MsShoppingCartClient,
        logger_service_1.LoggerService])
], ShoppingCartController);
exports.ShoppingCartController = ShoppingCartController;
//# sourceMappingURL=shopping-cart.controller.js.map