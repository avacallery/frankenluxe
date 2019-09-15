document.addEventListener('DOMContentLoaded', function(){
    
    const list = document.querySelector('#drink-list ul'); 
    const forms = document.forms;   

//delete drinks
list.addEventListener('click', (e) => {
    if (e.target.className == 'delete'){
        const li = e.target.parentElement; 
        li.parentNode.removeChild(li); 
    }
}); 

//add drinks
const addForm = forms['add-drink'];
addForm.addEventListener('submit', function(e){
    e.preventDefault();

//create elements
const value = addForm.querySelector('input[type="text"]').value;
const li = document.createElement('li');
const drinkName = document.createElement('span');
const deleteButton = document.createElement('span');

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

<<<<<<< HEAD


=======
    // hide drinks
    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change', function(e){
      if(hideBox.checked){
        list.style.display = "none";
      } else {
        list.style.display = "initial";
      }
    });
  
    // filter drinks
    const searchBar = forms['search-drinks'].querySelector('input');
    searchBar.addEventListener('keyup', (e) => {
      const term = e.target.value.toLowerCase();
      const drinks = list.getElementsByTagName('li');
      Array.from(drinks).forEach((drink) => {
        const title = drink.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(e.target.value) != -1){
          drink.style.display = 'block';
        } else {
          drink.style.display = 'none';
        }
      });
    });
}) 
>>>>>>> v9_script_hide
