// spread

const friend1: string[] = ["Rahim", "Karim", "Jamal"];
const friend2: string[] = ["Amin", "Jamin", "Kamin"];

friend1.push(...friend2);

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

const mentorFunction = (...mentores: string[]) => {
  mentores.forEach((mentor: string) => console.log(`Hi ${mentor}`));
};

mentorFunction("Mina", "Tina", "Lina");
