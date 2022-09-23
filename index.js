const todoInput = document.querySelector('.todo-input');
const btnSubmit = document.querySelector('.btn-submit');
const listItems = document.querySelector('.list-items');
const selectOption =document.querySelector('.select-option');

//add event listener
btnSubmit.addEventListener('click',function(e){
    e.preventDefault();
    //create li
    const todoList = document.createElement('li');
    //add class name
    todoList.classList.add('list');
   
    // add textNode
    todoList.appendChild(document.createTextNode(`${todoInput.value}`));
        
    //append todolist to the parent
    listItems.appendChild(todoList);

    //create delete and check button
    const deleteBtn = document.createElement('button');
    //add class name
    deleteBtn.classList.add('btn-delete')
    //add a fontawesome image to it
    deleteBtn.innerHTML=`<i class="fa fa-trash" aria-hidden="true"></i>`
    
    //append it to it parent
    todoList.appendChild(deleteBtn);

    //create delete and check button
    const checkBtn = document.createElement('button');
    //add class name
    checkBtn.classList.add('btn-checked')
   
    //add a fontawesome image to it
    checkBtn.innerHTML=`<i class="fa fa-check" aria-hidden="true"></i>`
    
    //append it to it parent
    todoList.appendChild(checkBtn);
    console.log(listItems)

    //clear todo input value
    todoInput.value='';

})
//add event listener 
listItems.addEventListener('click',clickBtn)
function clickBtn(e){
    if(e.target.classList.contains('btn-delete')){
        if(confirm('Are you sure you want to delete this item?')){
            let item = e.target.parentElement;
            item.remove()
        }
        
    }if(e.target.classList.contains('btn-checked')){
        let item = e.target.parentElement;
        item.classList.toggle('completed');

    }
}

//add event listener to select drop down
selectOption.addEventListener('click',filterOption);
function filterOption(e){
    const todos = listItems.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case 'all':
                break;
            case "completed":
            if(todo.classList.contains('completed')){
                todo.style.display ='flex';
            }else{
                todo.style.display='none';
            }

        }

    });
    
}
