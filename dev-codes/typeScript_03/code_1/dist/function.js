"use strict";
// normal function
Object.defineProperty(exports, "__esModule", { value: true });
function add(num1, num2) {
    return num1 + num2;
}
add(4, 6);
//  default value
function add2(num1, num2 = 6) {
    return num1 + num2;
}
add2(4);
//  arrow function
const arrowAdd3 = (name1, name2) => name1 + name2;
arrowAdd3("Mashle", "Hanma");
//  method
const userDetails = {
    frstName: "Mashle",
    lastName: "Hanma",
    balance: 0,
    salary(balance) {
        return `Total salary is ${this.balance + balance}`;
    },
};
// method type callback function
const arr = [1, 5, 10];
const newArray = arr.map((value) => value * 10);
console.log(newArray);
//# sourceMappingURL=function.js.map