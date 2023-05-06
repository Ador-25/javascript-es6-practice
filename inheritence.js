function Book(title,author,year){
    this.title = title
    this.author = author
    this.year = year
}

Book.prototype.getSummary = function(){
    return  this.title+' was written by '+this.author+' in '+this.year
}

function Magazine(title,author,year,month){
    Book.call(this,title,author,year)
    this.month = month
}
Magazine.prototype = Object.create(Book.prototype)

const maganize =  new Magazine('CS 102','Jon','2008','Jan')
console.log(maganize.getSummary())