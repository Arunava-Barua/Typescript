const User = {
    name: "Arv",
    email: "rahulbarua31@gmail.com",
    isActive: false
}

function createUser1({name: string, isActive: boolean}) {

}

let newUser = {name: "Rahul", isActive: true, email: "rahulbarua31@gmail.com"}
createUser1(newUser); // object can have different attributes 

function createCourse() : {} {
    return {}
}

type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    credDetails?: string
}

type Bank = {
    readonly _id: string,
    bankName: string
}

type BankingDetails = {
    cardNumber: string
}

type Payment = Bank & BankingDetails;

let pay : Payment = {
    _id: "1213fdrsgdfsg",
    bankName: "SBI",
    cardNumber: "6578127392"
}

console.log(pay);


// function createUser(user: User) : User {
//     console.log(user.name);
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: false})

let user : User = {
    _id: "12334fsfsdfd",
    name: "Arunava",
    email: "rahulbarua@gmail.com",
    isActive: true,
}

console.log(user);

export {}