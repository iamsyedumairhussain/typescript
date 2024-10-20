const arrString: string[] = []
arrString.push('abc')

const arrNumber: number[] = []
arrNumber.push(10)

type User = {
    name: string,
    dept: string
}
const arrStudent: User[] = []
arrStudent.push({name:'Umair',dept:'CS'})

const arrML: number[][] = [[],[]]
arrML.push([[10][20]])

console.log('arrML ===========>',arrML)

export { }
