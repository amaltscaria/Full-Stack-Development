const add = (n1: number, n2: number, showResult: boolean, resultPhrase: string) => {
  //Vanilla js
  // if(typeof n1 === 'number' && typeof n2 === 'number')
  // return n1 + n2;
  // else throw new Error('Invalid Input!');
  //without throwing the erro that is without breaking our app
  //we could have used ts to prevent this during development itself.
  const result = n1 + n2;
  if (showResult) {
    console.log(resultPhrase + result);
  } else {
    return n1 + n2;
  }
};

const number1 = 2.8;
const number2 = 5;
const printResult = true;
const resultPhrase = "Result is: ";


const result = add(number1, number2, printResult, resultPhrase);
 