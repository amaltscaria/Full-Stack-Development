const infinite = () => {
    while(true){
        console.log('Amal');
    }
}

const generateError  = (message: string, code: number) => {
    // if(n1 + n2 + n3 > 10) {
        const error = new Error('Error Code: '+ code +'\n Error Message: '+ message);
        throw error;
        // throw {message, code};
    // }
    // else {
    //     return n1 + n2 + n3;
    // }
}

generateError('Invalid Input', 1002);