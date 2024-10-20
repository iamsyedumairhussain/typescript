type User = { name: 'Umair', age: 21, email: 'abc@gmai.com' }

function createuser(user: User): User {
    return {
        name: 'Umair', age: 21, email: 'abc@gmai.com'

    }
}

const data = createuser({ name: 'Umair', age: 21, email: 'abc@gmai.com', dept: 'CS' }) // error
const data1 = createuser({ name: 'Umair', age: 21, email: 'abc@gmai.com' }) // fine

export { }
