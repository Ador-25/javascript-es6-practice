function Book(title,author,year){
    this.title = title
    this.author = author
    this.year = year
}

Book.prototype.getSummary = function(){
    return  this.title+' was written by '+this.author+' in '+this.year
}
Book.prototype.getAge = function(){
    return 2023-this.year
}

Book.prototype.revise = function(year){
    this.year = year
    this.revised = true
}
const b1= new Book('CS101','Jon','2006')
console.log(b1.getSummary())
console.log(b1.__proto__)
console.log(b1.getAge())
b1.revise(2005)
console.log(b1.getAge())
console.log(b1.revised)