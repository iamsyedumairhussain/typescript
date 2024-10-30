class User {
    private count: number = 1
    get getCount(): number {
        return this.count
    }
    set setCount(num: number
    ) {
        this.count = this.count + 1
    }
}

const u1 = new User();
console.log(u1.getCount)
u1.setCount = 0
u1.setCount = 0
u1.setCount = 0
u1.setCount = 0
u1.setCount = 0
u1.setCount = 0
console.log(u1.getCount) // outputs 7




export { }
