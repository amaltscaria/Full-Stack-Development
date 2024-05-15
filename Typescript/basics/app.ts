// Enum
// gives enumerated lists => human readable labels

const employee3 = {
    name: 'Amal', 
    age: 24,
    hobbies: ['Cooking', 'Football'],
    role: 1,
}
// if we add role like this , we assing something like 4 which has no value
// if we add role like this for eg: 1 => admin, 2 => read-only, 3 => author
// it might be difficult to remember which was assigned to which

// so may be a better was is to use like

const employee4 = {
    name: 'Amal', 
    age: 24,
    hobbies: ['Cooking', 'Football'],
    role: 'ADMIN',
}
// 'ADMIN', 'READ-ONLY', 'AUTHOR'
//here also there are some issues as we have to exactly remember the spelling and etch...


// so enum comes to play

enum Role{admin, readOnly, author};
console.log(Role);

const employee5 = {
    name: 'Amal',
    age: 24,
    hobbies: ['Gaming', 'Fishing'],
    role: Role.readOnly,
}

console.log(employee5.role);
