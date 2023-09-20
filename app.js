const list = document.querySelector('#book-list ul');

//delete books
list.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
    const li = e.target.parentElement; 
    list.removeChild(li)
    }
});

//add books-list
const addForms = document.forms['add-book'];
addForms.addEventListener('submit',function(e){
    e.preventDefault();
    const value = addForms.querySelector('input[type="text"]').value;
    
    //create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

//add content
deleteBtn.textContent = 'delete';
bookName.textContent = value;

//add classes
bookName.classList.add('name');
deleteBtn.classList.add('delete');

    //append to document
li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);

});