const add = (n1: number, n2: number) => {
    //Vanilla js
    if(typeof n1 === 'number' && typeof n2 === 'number')
    return n1 + n2;
    else throw new Error('Invalid Input!');
    //without throwing the erro that is without breaking our app
    //we could have used ts to prevent this during development itself.
}

const number1 = 2.8;
const number2 = 5;
const result = add(number1, number2);
console.log(result);