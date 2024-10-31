interface Admin {
    isAdmin: boolean

}

interface User {
    isUser: boolean
}

const admin1 : Admin = {isAdmin:true}
const user1 : User = {isUser:true}


function isAdmin(account: Admin | User) {
    if('isAdmin' in account){
        return true
    } 
    return false

}

console.log(isAdmin(user1))

export {}
