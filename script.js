document.addEventListener('DOMContentLoaded', function(){
    var list = document.querySelector('#drink-list ul'); 
    var forms = document.forms;   
    
});

//delete drinks
list.addEventListener('click', (e) => {
    if (e.target.className == 'delete'){
        var li = e.target.parentElement; 
        li.parentNode.removeChild(li); 
    }
}); 

//add drinks
var addForm = forms['add-drink'];
addForm.addEventListener('submit', function(e){
    e.preventDefault();

//create elements
var value = addForm.querySelector('input[type="text"]').value;
var li = document.createElement('li');
var drinkName = document.createElement('span');
var deleteButton = document.createElement('span');

//add text content
drinkName.textContent = value;
deleteButton.textContent = 'delete'; 

//add classes
drinkName.classList.add('name');
deleteButton.classList.add('delete');

//append to DOM
li.appendChild(drinkName);
li.appendChild(deleteButton);
list.appendChild(li); 
});
