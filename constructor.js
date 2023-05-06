function Book(title,author,year){
    this.title = title
    this.author = author
    this.year = year
    this.getSummary= function(){
        return  this.title+' was written by '+this.author+' in '+this.year
    } 
}

const b1= new Book('CS101','Jon','2006')
console.log(b1.getSummary())
console.log(b1)