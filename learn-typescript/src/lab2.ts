enum ProductRate {
    low = "thap",
    hight = "cao",
}

const Product: { name: string; rate: ProductRate } = {
    name: "laptop",
    rate: ProductRate.low,
};

console.log(ProductRate);