class User { 
    constructor(private name:string, public age: number){
        this.name = name
    }
}

const user1 =  new  User ('Umair',21)
// console.log('user1 ==========>',user1.name) not accesible
console.log('user1 ==========>',user1.age) // not accesible

export {}
