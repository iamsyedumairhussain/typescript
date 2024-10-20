const user = { name: 'Umair', age: 21, email: 'abc@gmai.com' }

function createuser({ name: string, age: number }): { name: string, age: number } {
    return {
        name: 'Umair', age: 21

    }
}

const data = createuser({name: 'Umair', age: 21, email: 'abc@gmai.com'}) // error
const data2 = createuser(user) // fine. this is weird behaviour of ts.

export { }
