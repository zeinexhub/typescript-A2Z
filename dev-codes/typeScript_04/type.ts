var age: number = 45;

let employeeName: string = "Jbj";

const num: number = 100;

let isPresent: boolean = true;

let fruits: string[] = ["banana", "mango"];

let moreFruits: Array<string> = ["apple", "lichi"];

console.log(num);

console.log(employeeName);

console.log(age);

console.log(isPresent);

console.log(fruits);

console.log(moreFruits);

let num1: number = 10,
  num2 = 20;

if (num1 > num2) {
  console.log(`num1 is greater than num2`);
} else if (num1 < num2) {
  console.log(`num2 is greater than num1`);
} else if (num1 == num2) {
  console.log(`num1 is equal to num2`);
}

for (let i = 0; i < 3; i++) {
  console.log(`${i}`);
}

function sum(x: number, y: number) {
  return x + y;
}

class employee {
  empId: number;
  empName: string;

  constructor(empid: number, empname: string) {
    this.empId = empid;
    this.empName = empname;
  }
}
