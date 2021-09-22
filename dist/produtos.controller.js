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
exports.ProdutoController = void 0;
const common_1 = require("@nestjs/common");
const produto_model_1 = require("./produto.model");
const produtos_services_1 = require("./produtos.services");
let ProdutoController = class ProdutoController {
    constructor(produtosService) {
        this.produtosService = produtosService;
    }
    obterTodos() {
        return this.produtosService.obterTodos();
    }
    obterUm(param) {
        return this.produtosService.obterUm[param.id];
    }
    criar(produto) {
        produto.id = 1000;
        this.produtosService.criar(produto);
    }
    alterar(produto) {
        return this.produtosService.alterar(produto);
    }
    apagar(param) {
        this.produtosService.apagar(param.id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ProdutoController.prototype, "obterTodos", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", produto_model_1.Produto)
], ProdutoController.prototype, "obterUm", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [produto_model_1.Produto]),
    __metadata("design:returntype", void 0)
], ProdutoController.prototype, "criar", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [produto_model_1.Produto]),
    __metadata("design:returntype", produto_model_1.Produto)
], ProdutoController.prototype, "alterar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProdutoController.prototype, "apagar", null);
ProdutoController = __decorate([
    (0, common_1.Controller)('produtos'),
    __metadata("design:paramtypes", [produtos_services_1.ProdutosService])
], ProdutoController);
exports.ProdutoController = ProdutoController;
//# sourceMappingURL=produtos.controller.js.map