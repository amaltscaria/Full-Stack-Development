// function type

const addFun = (n1: number, n2: number) => {
  return n1 + n2;
};
const res3 = addFun(3, 6);
console.log(res3);

const printResult3 = () => {
    console.log(addFun(3,5));
}

// why the need of function type

// example

let addFunction;
addFunction = addFun;
console.log(addFunction(98, 2)); // works perfect but // can assign anything as type is any
addFunction = 7
// addFunction(9,3); // Does not show error(but shows with tsconfig file with stric : true or noImplicitAny: true)

// solution
let addFunction2: Function;
addFunction2 = addFun;
addFunction2 = printResult3; // this is issue with just the Function type
console.log(addFunction2(98, 2)); // works perfect but this is not the intended fun
// addFunction2 = 5; error

// solution using Function type
let addFunction3 : (a: number, b:number) => number;

addFunction3 = addFun;
// addFunction3 = printResult3; // error