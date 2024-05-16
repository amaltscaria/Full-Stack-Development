//Literal

// represents specific values that a variable or property can hold.

const combine3 = (
  input1: number | string,
  input2: number | string,
  //   resultConversion: string // we might forget the values so we use literal
  resultConversion: "as-number" | "as-text"
) => {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if(resultConversion === 'as-number')
  // return +result;
  // else return result.toString();
};

const combineAges = combine3(20, 30, "as-number");
console.log(combineAges);
const combineStringAges = combine3("20", "30", "as-number");
console.log(combineStringAges);
const combineNames = combine3("Amal T ", "Scaria", "as-text");
console.log(combineNames);
