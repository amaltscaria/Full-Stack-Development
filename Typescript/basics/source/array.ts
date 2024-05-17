const person1 = {
  name: "Amal",
  age: 24,
  hobbies: ["Sports", "Cooking"],
};


let favouriteActivities: string[];

// favouriteActivities = 'Sports' error
// favouriteActivities = 0 error
// favouriteActivities = [2,3] error

favouriteActivities = ['Sports', 'Cooking'];
// favouriteActivities = ['Sports', 3]; error

// To support mixed array we can use any but not recommended

let mixedArray;
mixedArray = ['One', 2];

// or
let mixedArray1: any [];
mixedArray1 = ['Two', 3];


for(const hobby of person1.hobbies){
  console.log(hobby); // it works bcz ts correctly interpretted hobbies as an array
  console.log(hobby.charCodeAt(0)); // it works bcz ts correctly interpretted hobby as a string => so we can use all string methods
  // console.log(hobby.map()) => error
}


