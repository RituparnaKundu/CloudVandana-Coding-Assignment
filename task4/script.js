document.addEventListener('DOMContentLoaded', function() {

    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');
    const emptyMessage = document.getElementById('emptyMessage');
    
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText !== '') {

            const li = document.createElement('li');
            
  
            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            

            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-btn';
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                taskList.removeChild(li);
                updateEmptyMessage();
            });
            
     
            li.appendChild(taskSpan);
            li.appendChild(deleteButton);
            

            taskList.appendChild(li);
            
           
            taskInput.value = '';
            
            
            updateEmptyMessage();
        }
    }
    

    function updateEmptyMessage() {
        if (taskList.children.length > 0) {
            emptyMessage.style.display = 'none';
        } else {
            emptyMessage.style.display = 'block';
        }
    }
    
    
    addButton.addEventListener('click', addTask);
    

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    

    updateEmptyMessage();
});