// Enum
// gives enumerated lists => human readable labels

// In TypeScript, enums allow you to define a set of human readable named constants,
//  making it easier to work with groups of related values. Enums are useful when you have a fixed set of values that are known at compile time.

const employee3 = {
  name: "Amal",
  age: 24,
  hobbies: ["Cooking", "Football"],
  role: 1,
};
// if we add role like this , we assing something like 4 which has no value
// if we add role like this for eg: 1 => admin, 2 => read-only, 3 => author
// it might be difficult to remember which was assigned to which

// so may be a better way is to use like

const employee4 = {
  name: "Amal",
  age: 24,
  hobbies: ["Cooking", "Football"],
  role: "ADMIN",
};
// 'ADMIN', 'READ-ONLY', 'AUTHOR'
//here also there are some issues as we have to exactly remember the spelling and etch...

// so another way is
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

const employee5 = {
  name: "Amal",
  age: 24,
  hobbies: ["playing", "singing"],
  role: ADMIN,
  // Downside is it is inferred as just a number and we can give any invalid nubmer
};

// so enum comes to play

// enum Role {
//   admin,
//   readOnly,
//   author,
// }

enum Role {
  admin = 5,
  readOnly,
  author, // 5, 6, 7
}
console.log(Role);

const employee6 = {
  name: "Amal",
  age: 24,
  hobbies: ["Gaming", "Fishing"],
  role: Role.readOnly,
};

console.log(employee6.role);
