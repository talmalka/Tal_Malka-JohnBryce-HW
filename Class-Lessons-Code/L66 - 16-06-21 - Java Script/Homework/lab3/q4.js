let books = ['Elon musk','Harry Poter','On Juneteenth','Libertie','Empire of Pain'];
function isBookExist(book){
    //return books.filter(b=> b==book).length>=1;
    return books.includes(book);
}

console.log(isBookExist('Harry Poter'));
console.log(isBookExist('Harry Moshe'));