//object literals
const book1 = {
    title:'CS 101',
    author:'Ador',
    year:'2025',
    getSummary: function(){
        return  this.title+' was written by '+this.author+' in '+this.year
    } 
}
console.log(Object.keys(book1))