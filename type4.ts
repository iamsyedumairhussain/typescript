type Vehicle = {
    wheels?: number
}

type Suzuki = {
    japanRegID: string
}


type Car = Vehicle & Suzuki & {
    carPlateNumber: string
}
let mehran: Car;
mehran = { wheels: 4, japanRegID: '123', carPlateNumber: 'abc' } //fine
mehran = { japanRegID: '123', carPlateNumber: 'abc' } //fine

console.log(mehran)
