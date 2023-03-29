interface User {
    email: string,
    userId: number,
    startTrial(): string
}

interface User {
    github: string
}

interface Admin extends User {
    role: "Admin" | "TA" | "Learner"
}
