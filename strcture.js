//Local variables 
let theInput=document.querySelector('.add-task input');
let theAddButton=document.querySelector('.plus');
let tasksContainer=document.querySelector('.tasks-content');
let doneTasks=document.querySelector('.done-tasks');
let noTasksMessage=document.querySelector('.no-tasks-message');
let toggleTasks;
var myArray=[];

//focus on Input field(for cursor)
window.onload=function(){
    theInput.focus();
};

//fucntion to Check if task is exist
function isExist(Input){
    var flag=false;
    var i=0;
    for(i=0;i<myArray.length;i++){
        if(myArray[i]===Input){
            flag=true;
        }
    }
    return flag;
};

//Adding the task
theAddButton.onclick=function(){

    //Check if the task is exist
    if( isExist(theInput.value)){
        Swal.fire({ 
            title: 'Error!', 
            text: 'you cannot add the same task', 
            icon: 'error',                    
            confirmButtonText: 'I understand'
          })
         
        }
    
    
    //if input is empty
     else if(theInput.value===''){
        Swal.fire({ 
            title: 'Error!', 
            text: 'You cannot add empty task', 
            icon: 'error',                    
            confirmButtonText: 'I understand'
          })
    }
    
    else {
        let noTasksMessage=document.querySelector('.no-tasks-message');
        
        //check if span With no Tasks message is exist
        if(document.body.contains(noTasksMessage)){

            //Remove No tasks message
            noTasksMessage.remove();
        }
        
        
    
        //Create Main Span Element
        let mainSpan=document.createElement("span");

        //create Task text span
        let textSpan=document.createElement("span");
        
        //create Finish Button
        let finishButton=document.createElement("i");
       
        //create Delete Button
        let DeleteSpan=document.createElement("span");

        //create Date Added
        let dateAdded=document.createElement("span");

    
        //create text(input value) 
        let Text=document.createTextNode(theInput.value);
     
        //create the delete button text
        let deleteText=document.createTextNode("Delete");

        //Generate the Date on click(+)
        var today=new Date();
        var date=today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    
        //Add text to Main span text
        textSpan.appendChild(Text);

        //Add textSpan To the Main
        mainSpan.appendChild(textSpan);
        
        //add class to the text span
        textSpan.classList.add('text-task');
    
        //Add text to delete button
        DeleteSpan.appendChild(deleteText);
    
        //Add Date to the span 
        dateAdded.innerHTML=date;
        dateAdded.contentEditable = false;

        //Add calss to Main span
        mainSpan.classList.add('task-box');
        mainSpan.contentEditable = true; 

        //Add class To Fininsh Buttton
        finishButton.classList.add('far');
        finishButton.classList.add('fa-check-circle');
        finishButton.contentEditable = false;

        //Add calss to delete button
        DeleteSpan.className='delete'; 

        //Add class to the span date
        dateAdded.classList.add('date-added');


        //add date span to the main span
        mainSpan.appendChild(dateAdded);
        

        //add delete button to main span
        mainSpan.appendChild(DeleteSpan);

        //Add finish button 
        mainSpan.appendChild(finishButton);
        
        //add the full task(Task Box) to the container 
        tasksContainer.appendChild(mainSpan);
    
        //push texet element to the array to use it when check if text is exist
        myArray.push(theInput.value);
        
        //Empty the input
        theInput.value='';
    
        //focus on field after add the task
        theInput.focus();
    
        };
    };
    

    
//Delete The task that i target
document.addEventListener('click',function(e){

    //Check if the Element have class Delete
    if(e.target.className=='delete'){
        //delete The current task
        e.target.parentNode.remove();
    }

    if(tasksContainer.children.length==2){
        createNoTasks();
    }

});

//Function to Create No Tasks Span To Add it after delete All spans
function createNoTasks(){

    let noTasksSpan=document.createElement('span');
    let noTasksMessage=document.createTextNode('No Tasks To Show');
    noTasksSpan.appendChild(noTasksMessage);
    noTasksSpan.classList.add('no-tasks-message');
    tasksContainer.appendChild(noTasksSpan);
};


//Function To Finish the Task an put it in the Done Container
document.addEventListener('click',function(e){
    
    if(e.target.classList[1] =='fa-check-circle'){
        toggleTasks=e.target.parentNode;
        toggleTasks.classList.add('opacity');
        e.target.parentNode.remove();
        doneTasks.appendChild(toggleTasks);

        if(tasksContainer.children.length == 2){
           createNoTasks();
        };
    }
})

    

