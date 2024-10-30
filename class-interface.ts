interface Comments  {
    comment: string,
    likesOnComment:number
}

interface View  {
    viewsCount: number,
    showViews() : void

}

class Facebook implements Comments, View {
    constructor(public comment: string, public likesOnComment: number, public addedProps: string, public viewsCount: number){
        this.comment = comment
        this.likesOnComment = likesOnComment
        this.addedProps = addedProps
        this.viewsCount = viewsCount
    }
    showViews(){
        console.log(this.viewsCount)
    }
}

const fb1 = new Facebook('my comment', 10, 'Some addition stuff',100)
