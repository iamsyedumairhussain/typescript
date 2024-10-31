function checkType(data : Date | string ){
    if(data instanceof Date){
       return data.getDate()
    }
    return data.toLowerCase()
}

const date = new Date();
const myString = 'HELLO WORLD'
console.log(checkType(myString))

export {}
