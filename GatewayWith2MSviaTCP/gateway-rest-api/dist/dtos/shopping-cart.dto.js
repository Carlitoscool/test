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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingCartDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const iProduct_interface_1 = require("../products/interfaces/iProduct.interface");
class ShoppingCartDTO {
}
__decorate([
    swagger_1.ApiProperty({
        description: 'Id of the shopping cart',
        example: '123456',
        uniqueItems: true
    }),
    __metadata("design:type", String)
], ShoppingCartDTO.prototype, "shoppingCartId", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Id of the user',
        example: '123456',
        uniqueItems: true
    }),
    __metadata("design:type", String)
], ShoppingCartDTO.prototype, "userId", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Total amount in the shopping cart',
        example: '123.31'
    }),
    __metadata("design:type", Number)
], ShoppingCartDTO.prototype, "totalPrice", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'Total quantity of products in the shopping cart',
        example: '3'
    }),
    __metadata("design:type", Number)
], ShoppingCartDTO.prototype, "totalQuantity", void 0);
__decorate([
    swagger_1.ApiProperty({
        description: 'List of products in the shopping cart',
    }),
    __metadata("design:type", Array)
], ShoppingCartDTO.prototype, "products", void 0);
exports.ShoppingCartDTO = ShoppingCartDTO;
//# sourceMappingURL=shopping-cart.dto.js.map