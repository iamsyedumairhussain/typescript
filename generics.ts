interface User {
    name:string
}

function getUser <User> (user : User) : User {
    return user

}

getUser({name:'Umir'})

export {}

// ======================= //

function getArray <Type> (arr: Type[]) : Type {   // takes array and returns one elemenr from an array
    return arr[0]
}

getArray(['1', 1, true])

export {}



// ======================= //


function getArray <Type> (arr: Type[]) : Type[] {   // takes array and returns an array
    return arr
}

getArray(['1', 1, true])

export {}


// ======================= //

function getArray <Type extends number[]> (arr: Type) : Type {   // we can do this in some other way as well but since typescript offers many options 
    return arr
}

getArray([1,2,3])

export {}
