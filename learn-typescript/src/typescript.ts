console.log("typescript");


let myName: string = "hoadv";
myName = "28";

let dihockhong: boolean = true;
dihockhong = false;

enum ProductRate {
    low = "thap",
    hight = "cao",
}
const Product: { name:string; rate: ProductRate } ={
    name: "laptop",
    rate: ProductRate.low,
};
console.log(ProductRate);