type User = { name: string, age: number, readonly email: string }

function createuser(user: User): User {
    
    user.email = 'xyz@gmai.com' // cannot assign due to readonly property
    return {
        name: 'Umair', age: 21, email: 'abc@gmai.com'

    }
}


const data = createuser({ name: 'Umair', age: 21, email: 'abc@gmai.com' }) // find

export { }
