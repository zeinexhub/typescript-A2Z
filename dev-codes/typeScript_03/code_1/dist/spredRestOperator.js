"use strict";
// spread
Object.defineProperty(exports, "__esModule", { value: true });
const friend1 = ["Rahim", "Karim", "Jamal"];
const friend2 = ["Amin", "Jamin", "Kamin"];
// friend1.push(...friend2);
const friendCircel = [...friend1, ...friend2];
console.log(friendCircel);
console.log(friend1);
const teacher1 = {
    html: "Mashle",
    css: "Hanma",
};
const teacher2 = {
    js: "Pashle",
    react: "Fanma",
};
const teacherList = { ...teacher1, ...teacher2 };
console.log(teacherList);
// rest
//# sourceMappingURL=spredRestOperator.js.map