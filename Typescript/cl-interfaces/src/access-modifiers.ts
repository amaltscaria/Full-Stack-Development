// Code goes here!
class Department1 {
    // public name: string; // default is public
    // private id: string;
    private employees: string[] = [];

    // constructor(n: string) {
    //     this.name = n;
    // }

    //shorthand initialization


    constructor(public name: string, private id: string){

    }
    //readonly
    // constructor(public name: string, private readonly id: string){

    // }

    describe(this:Department1) {
        console.log('The Department is: '+this.name + ' Id: '+this.id);
    }

    addEmployee(employee : string) {
        this.employees.push(employee);
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting1 = new Department1('Accounting','d1');
// console.log(accounting);

accounting1.addEmployee('Amal');
accounting1.addEmployee('Scaria');

// accounting1.employees[0] = 'Srihari'; //not ideal bcz its not ideal to use the class more than one way
// Because if we are working on a team one might use this approach and another might use another approach
// Mainly bacause in the addEmployee function there might have some additional security features like validation
// If we skip that and directly add an employee its not ideal, and seurity reasons too.

accounting1.describe();
accounting1.printEmployeeInfo();

