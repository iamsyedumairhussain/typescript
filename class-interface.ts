interface Comments  {
    comment: string,
    likesOnComment:number
}

interface View  {
    viewsCount: number,
}

class Facebook implements Comments, View {
    constructor(public comment: string, public likesOnComment: number, public addedProps: string, public viewsCount: number){
        this.comment = comment
        this.likesOnComment = likesOnComment
        this.addedProps = addedProps
        this.viewsCount = viewsCount
    }
}

const fb1 = new Facebook('my comment', 10, 'Some addition stuff',100)
