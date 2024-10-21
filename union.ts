let score: number | string = '10';

type Username = {
    id: number | string
}

type Admin = {
    username: string
}

const user: Username | Admin = { username: '10' }

function getId(name:string | number) : string | number{
    if(typeof name === 'string'){
        name.toLowerCase()
    }
    return 'Hello' 
}

const arr : (number | string) [] = ['1', 2]

let name: 'Umair' | 'Ammar'



export { }
