console.log("typescript");

let myName: string = "hoadv";

myName = "28";

let dihockhong: boolean = true;

dihockhong = false;

const student: {
    name: string;
    age: number;
    isactive: boolean;
} = {
    name: "Hoa",
    age: 20,
    isactive: true,
};

enum ProductRate {
    low = "thap",
    hight = "cao",
}

const Product: {
    name: string;
    rate: ProductRate;
} = {
    name: "laptop",
    rate: ProductRate.low,
};

console.log(student);
console.log(Product);
console.log(ProductRate);