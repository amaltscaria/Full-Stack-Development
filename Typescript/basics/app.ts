const employee = {
    name: 'Amal',
    age: 23,
    role: [2,'author'],
    // I want role to have exactly 2 elements always
    // also first one of type number and 2 one of type string
    // tuple comes handly when we want fixed length arrays with fixed type
}

// Here for the role it takes or infers union of number and string
// so even if we switch number with string no error occurs thats why we want tuple

employee.role = ['reader', 5] //works fine
employee.role = [3, 'reader', 'inactive'] //works fine

// so tuple is the solution for the above mentioned problems

const employee2: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'hiking'],
    role: [3, 'designer'],
}

// employee.role = [3,'writer', 'active']; error as it has 3 elements;
//but
 employee.role.push('active')// works
 console.log(employee.role);

//  employee.role = ['reader', 5]  error