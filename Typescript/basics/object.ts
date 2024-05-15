const object = {
  name: "Amal",
  age: 24,
};

console.log(object.age, object.name);
// works fine but if we not allow ts to infer and we define the type

const object2: object = {
  name: "Amal",
  age: 24,
};

// console.log(object2.name) error => because we have told ts that it will be of type
// object nothing else, ts doesn't know if the obj has a name property or not

const object3: { name: string; age: number } = {
  name: "Amal",
  age: 27,
};

// But this is automatically inferred by ts based on usage. We dont want to assign.

// Nested object and types

const person = {
  name: "Amal",
  age: 24,
  address: {
    city: "Wayanad",
    pin: 673592,
  },
};

const person2: object = {
  name: "Amal",
  age: 24,
  address: {
    city: "Wayanad",
    pin: 673592,
  },
};

const person3: {
  name: string;
  age: number;
  address: {
    city: string;
    pin: number;
  };
} = {
  name: "Amal",
  age: 24,
  address: {
    city: "Wayanad",
    pin: 673592,
  },
};
