// Code goes here!
class Department3 {
    protected employees: string[] = [];

    constructor(public name: string, private id: string){

    }
    describe(this:Department3) {
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

class ITDepartment1 extends Department3 {

    constructor(id: string, public admins: string[]){
        super('IT',id);
    }
}

class AccountingDepatment1 extends Department3 {
    private lastReport: string;

    get mostRecentReport(){
        if(this.lastReport)
        return this.lastReport;
        else throw new Error('No report Found');
    }
    set mostRecentReport(value: string) {
        if(!value){
            throw new Error('Please add a valid value');
        }
        this.addReport(value)
    }

    constructor(id: string, private reports : string[]) {
        super('Accounting', id);
        this.lastReport = reports[0];
    }
    addEmployee(employee: string): void {
        if(employee === 'Max'){
            return;
        }
        this.employees.push(employee);
    }

    addReport(text: string){
        this.reports.push(text);
        this.lastReport = text;
    }
    printReport(){
        console.log(this.reports);
    }
}

const it1 = new ITDepartment1('i1', ['Amal', 'Max']);
console.log(it1);

const accountingD1 = new AccountingDepatment1('a1', []);
accountingD1.addReport('Something went wrong!');
accountingD1.mostRecentReport = 'Network Failure';
console.log(accountingD1.mostRecentReport);

accountingD1.addEmployee('Max');
accountingD1.addEmployee('Amal');
console.log(accountingD1);



