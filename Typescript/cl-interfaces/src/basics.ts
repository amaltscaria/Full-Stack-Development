// Code goes here!
class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    describe(this:Department) {
        console.log('The Department is: '+this.name);
    }
}
const accounting = new Department('Accounting');
// console.log(accounting);

accounting.describe();

const accountingCopy = {name:'Administration',describe: accounting.describe};
accountingCopy.describe();  // undefined