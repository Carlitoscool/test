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
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_product_dto_1 = require("../dtos/create-product.dto");
const product_dto_1 = require("../dtos/product.dto");
const logger_service_1 = require("../logger/logger.service");
const ms_products_client_service_1 = require("./ms-products-client.service");
let ProductsController = class ProductsController {
    constructor(msProductsClient, logger) {
        this.msProductsClient = msProductsClient;
        this.logger = logger;
    }
    async create(product) {
        this.logger.debug('Create product Endpoint');
        return this.msProductsClient.create(product);
    }
    async findAll() {
        this.logger.debug('Find all products Endpoint');
        return this.msProductsClient.findAll();
    }
    async findById(productId) {
        this.logger.debug('Find product by id Endpoint');
        return this.msProductsClient.findById(productId);
    }
    async update(productId, product) {
        this.logger.debug('Update product Endpoint');
        return this.msProductsClient.update(productId, product);
    }
    async delete(productId) {
        this.logger.debug('Delete product Endpoint');
        return this.msProductsClient.delete(productId);
    }
};
__decorate([
    swagger_1.ApiCreatedResponse({ type: product_dto_1.ProductDTO }),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDTO]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "create", null);
__decorate([
    swagger_1.ApiOkResponse({ type: product_dto_1.ProductDTO }),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findAll", null);
__decorate([
    swagger_1.ApiOkResponse({ type: product_dto_1.ProductDTO }),
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findById", null);
__decorate([
    swagger_1.ApiOkResponse({ type: product_dto_1.ProductDTO }),
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, product_dto_1.ProductDTO]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "update", null);
__decorate([
    swagger_1.ApiOkResponse({ type: product_dto_1.ProductDTO }),
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "delete", null);
ProductsController = __decorate([
    common_2.Controller('products'),
    __metadata("design:paramtypes", [ms_products_client_service_1.MsProductsClient,
        logger_service_1.LoggerService])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map