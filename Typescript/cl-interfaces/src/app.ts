//static methods
// eg Math we can access it globally by just Math.pow()
// we are not required to create a ojbect like new Math();
// we call the static method  directly on the class without creating an object;
// Threfore we use the class as the grouping mechanism;

class StaticFunctions {
    static firstName = 'Amal';
    constructor() {
        console.log(StaticFunctions.firstName);
    }
    static createEmployee(name: string) {
        return {name}
    }
}

console.log(StaticFunctions.firstName)
const obj = StaticFunctions.createEmployee('Leo');
console.log(obj);