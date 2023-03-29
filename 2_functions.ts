const add = (num: number) =>{
    return num + " hello ";
}

const square = (num: number) : number =>{
    return num * num;
}

const throwError = (msg : string) : never => {
    throw new Error(msg);
}

let result = square(1234)
console.log(result);


export {}