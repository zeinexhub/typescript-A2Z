// normal function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(4, 6);

//  default value

function add2(num1: number, num2: number = 6): number {
  return num1 + num2;
}

add2(4);

//  arrow function

const arrowAdd3 = (name1: string, name2: string): string => name1 + name2;

arrowAdd3("Mashle", "Hanma");

//  method

const userDetails = {
  frstName: "Mashle",
  lastName: "Hanma",
  balance: 0,
  salary(balance: number): string {
    return `Total salary is ${this.balance + balance}`;
  },
};

// method type callback function

const arr: number[] = [1, 5, 10];

const newArray: number[] = arr.map((value: number): number => value * 10);

console.log(newArray);
