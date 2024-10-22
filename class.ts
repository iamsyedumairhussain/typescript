class User {
    name: string
    age: number
    readonly dept:string
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
        this.dept = 'CS'
    }
}

const user1 = new User('Umair', 21);
console.log('user1 =======>', user1)


// ================ shorter syntax

class User {
    constructor(public name: string, public age: number, readonly dept?: string) {
        this.name = name
        this.age = age
        this.dept = 'CS'
    }
}

const user1 = new User('Umair', 21);
console.log('user1 =======>', user1)


export { }


export { }
