"use strict";
console.log("typescript");
let myName = "hoadv";
myName = "28";
let dihockhong = true;
dihockhong = false;
const student = {
    name: "Hoa",
    age: 20,
    isactive: true,
};
var ProductRate;
(function (ProductRate) {
    ProductRate["low"] = "thap";
    ProductRate["hight"] = "cao";
})(ProductRate || (ProductRate = {}));
const Product = {
    name: "laptop",
    rate: ProductRate.low,
};
var status;
(function (status) {
    status["done"] = " hoan thanh ";
    status["doing"] = " dang lam ";
})(status || (status = {}));
const numbers = [1, 2, 3, 4];
const students = ["nam", "an"];
const products = [{ name: "laptop" }, { name: "laptop" }];
const newProducts = [];
console.log(student);
console.log(Product);
console.log(ProductRate);
