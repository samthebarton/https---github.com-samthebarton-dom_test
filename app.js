var books = document.querySelectorAll('#book-list li .name');
// console.log(books);
Array.from(books).forEach(function(book){
    book.textContent = test;
});