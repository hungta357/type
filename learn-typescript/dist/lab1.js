"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Viết 1 hàm trả về chu vi và diện tích hình chữ nhật
function chuvihcn(chieudai, chieurong) {
    return (chieudai + chieurong) * 2;
}
console.log(chuvihcn(3, 4));
// 2. Hàm tính tổng nhiều số (Rest Parameter)
function tong(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}
console.log(tong(1, 2, 3, 4, 5));
// 3. Hàm đếm số lần xuất hiện của 1 ký tự trong chuỗi
function demKyTu(str, kyTu) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === kyTu) {
            count++;
        }
    }
    return count;
}
console.log(demKyTu("hello world", "l"));
// 4. Hàm kiểm tra số nguyên tố
function laSoNguyenTo(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(laSoNguyenTo(7));
console.log(laSoNguyenTo(10));
