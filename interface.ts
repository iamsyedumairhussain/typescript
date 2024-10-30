interface User {
    userID:string
}


interface Admin extends User {
    adminID:string
} 

const u1 : Admin = {adminID:'123',userID:'123'}
export {}
