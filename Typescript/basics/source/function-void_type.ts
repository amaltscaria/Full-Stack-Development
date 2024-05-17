// functions and void

// ts also infers the fun return type
const addNum = (n1: number, n2: number):number => {
    return n1 + n2;
}

const res = addNum(5,3);
console.log(res);


const printResult2 = (num: number): void => {
    console.log('Rsult: '+num)
}

printResult2(addNum(9,8));