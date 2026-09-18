"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductRate;
(function (ProductRate) {
    ProductRate["low"] = "thap";
    ProductRate["hight"] = "cao";
})(ProductRate || (ProductRate = {}));
const Product = {
    name: "laptop",
    rate: ProductRate.low,
};
console.log(ProductRate);
