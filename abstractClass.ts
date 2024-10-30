abstract class User {
    constructor(public name: string) {
        this.name = name
    }
    abstract showName(): void
    someComplexCalc(): void {
        console.log('someComplexCalc function')

    }

}

class Admin extends User {
    constructor(adminName: string) {
        super(adminName);
    }
    showName() {
        console.log('abstract method ===================', this.name) // outputs umair
    }
}

const ad1 = new Admin('Umair')
ad1.showName()
ad1.someComplexCalc()


export { }
