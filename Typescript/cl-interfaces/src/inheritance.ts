// Code goes here!
class Department2 {
    protected employees: string[] = [];

    constructor(public name: string, private id: string){

    }
    describe(this:Department2) {
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

class ITDepartment extends Department2 {

    constructor(id: string, public admins: string[]){
        super('IT',id);
    }
}

class AccountingDepatment extends Department2 {
    constructor(id: string, private reports : string[]) {
        super('Accounting', id)
    }
    addEmployee(employee: string): void {
        if(employee === 'Max'){
            return;
        }
        this.employees.push(employee);
    }

    addReport(text: string){
        this.reports.push(text);
    }
    printReport(){
        console.log(this.reports);
    }
}

const it = new ITDepartment('i1', ['Amal', 'Max']);
console.log(it);

const accountingD = new AccountingDepatment('a1', []);
accountingD.addEmployee('Max');
accountingD.addEmployee('Amal');
accountingD.addReport('Something went wrong!');
console.log(accountingD);



