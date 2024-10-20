type User = { name: string, age: number, email: string }

function createuser(user: User): User {
    
    return {
        name: 'Umair', age: 21, email: 'abc@gmai.com'

    }
}


const data1 = createuser({ name: 'Umair', age: 21, email: 1000 }) // error
const data2 = createuser({ name: 'Umair', age: 21, email: 'abc@gmai.com' }) // find

export { }
