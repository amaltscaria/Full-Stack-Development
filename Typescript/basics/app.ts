//Literal && type aliases

// represents specific values that a variable or property can hold.

// type aliases =>
// writing union as below may be cumbersome so 
type combinable = number | string; // type is not built into js but ts;
type conversionDescriptor = 'as-number' | 'as-text';

const combine3 = (
  input1: combinable,
  input2: combinable,
  //   resultConversion: string // we might forget the values so we use literal
  resultConversion: conversionDescriptor,
) => {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if(resultConversion === 'as-number')
  // return +result;
  // else return result.toString();
};

const combineAges = combine3(20, 30, "as-number");
console.log(combineAges);
const combineStringAges = combine3("20", "30", "as-number");
console.log(combineStringAges);
const combineNames = combine3("Amal T ", "Scaria", "as-text");
console.log(combineNames);

// Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

// For example:

type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!
// This allows you to avoid unnecessary repetition and manage types centrally.

// For example, you can simplify this code:

function greet(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}
// To:

type User1 = { name: string; age: number };
 
function greet1(user: User1) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder1(user: User1, checkAge: number) {
  return checkAge > user.age;
}