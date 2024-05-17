//Union

const combine = (input1: number, input2: number) => {
    const result = input1 + input2;
    return result;
}

const res1 = combine(2,3);
console.log(res1);

// const res = combine('amal', 'scaria') //wont work

const combine2 = (input1: number | string, input2: number | string) => {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number')
        result = input1 + input2;
    else 
        result = input1.toString() + input2.toString();
    // shows error bcz ts only knows its of union type(not the individual types), it may also have types than can't be added together like object or something.
    return result;
}

const res2 = combine2('Amal', ' Scaria');
console.log(res2);