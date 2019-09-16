document.addEventListener('DOMContentLoaded', function(){
    debugger;
    const list = document.querySelector('#drink-list ul'); 
    const forms = document.forms;   

//move drink
list.addEventListener('click', (e) => {
    if (e.target.className == 'addToCart'){
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
const addToCartButton = document.createElement('span');

//add text content
drinkName.textContent = value;
addToCartButton.textContent = 'Add To Cart'; 

//add classes
drinkName.classList.add('name');
addToCartButton.classList.add('addToCart');

//append to DOM
li.appendChild(drinkName);
li.appendChild(addToCartButton);
list.appendChild(li); 
});

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