 

// function sum(a:number,b:number){
//     return a+b;
// }
// sum(3,4);

function sayHi(name:string):string{
    return "xinchao" + name;
}
sayHi("hsdakda");

function sayHii(name:string): void {
    console.log("xin chao"+ name);
}
//arrow function
const sumAB =  (a: number, b:number): number => {
    return a+b;
};
sumAB(3, 4);
//

const diemtb = (a: number[]): number => {
    const sum = a.reduce((total, num) => total + num, 0);
    return sum / a.length;
};

console.log(diemtb([3, 4]));
