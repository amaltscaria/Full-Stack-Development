let value : unknown;

value = 5;

let newVal: string;
if(typeof value === 'string')
newVal = value; // error unknown is not assignable to type string

//but

let value2;
value2 = 7;

let newVal2 : string;
newVal2 = value2;