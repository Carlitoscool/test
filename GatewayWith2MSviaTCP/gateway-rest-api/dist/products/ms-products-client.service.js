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
exports.MsProductsClient = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const create_product_dto_1 = require("../dtos/create-product.dto");
const product_dto_1 = require("../dtos/product.dto");
let MsProductsClient = class MsProductsClient {
    constructor(msProductsClient) {
        this.msProductsClient = msProductsClient;
    }
    ;
    async create(product) {
        return await this.msProductsClient.send('create', product).toPromise();
    }
    async findAll() {
        return await this.msProductsClient.send('findAll', {}).toPromise();
    }
    async findById(productId) {
        return await this.msProductsClient.send('findById', productId).toPromise();
    }
    async update(productId, product) {
        return await this.msProductsClient.send('update', { productId, product }).toPromise();
    }
    async delete(productId) {
        return await this.msProductsClient.send('delete', productId).toPromise();
    }
};
MsProductsClient = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject('GATEWAY-REST-API')),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], MsProductsClient);
exports.MsProductsClient = MsProductsClient;
//# sourceMappingURL=ms-products-client.service.js.map