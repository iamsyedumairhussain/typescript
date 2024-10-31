type Fish = {
    swim: () => void
}
type Bird = {
    fly: () => void
}

function isFish(pet: Bird | Fish): pet is Fish {
    return (pet as Fish).swim != undefined
}

const pet1: Fish = {
    swim() {
        console.log('Fish is swimming')
    }
}
const pet2: Bird = {
    fly() {
        console.log('Bird is flying')
    }
}

console.log(isFish(pet1)) // true
console.log(isFish(pet2)) // false

export { }
