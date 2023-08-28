document.addEventListener("DOMContentLoaded", () => {

    const worksData = [];
    let numForId = parseInt(Math.random(1, 100) * 100)

    function showDilogbox(yourMsg) {
        let dilogBox = document.getElementById("dilogBox");
        let msg = document.getElementById("msg");
        let okBtn = document.getElementById("btn");

        // now set visible to dilog dilogBox
        // dilogBox.style.visibility = "visible";
        dilogBox.style.display = "flex";
        dilogBox.style.zIndex = "100";
        // new set the cutomized message
        msg.innerText = yourMsg;

        // creat click the button to hide the dilog box 
        okBtn.addEventListener("click", () => {
            // dilogBox.style.visibility = "hidden";
            dilogBox.classList.add('unpop-animation');
            setTimeout(() => {
                dilogBox.classList.remove('unpop-animation');
                dilogBox.style.display = "none";
            }, 500);

        })
    }

    function showInput() {
        addItemsDilog = document.getElementById("addItemsDilog")

        // now set visible to input dilogBox
        // addItemsDilog.style.visibility = "visible";
        addItemsDilog.style.display = "flex";
    }

    // ============creat a funtion to add the arrys Element to the display==========

    // creat the done button 
    function done_button() {
        const doneButton = document.createElement('button');
        const doneIcon = document.createElement('span');

        doneIcon.className = "material-symbols-outlined";
        doneIcon.textContent = "done";

        doneButton.appendChild(doneIcon);

        doneButton.className = "done";

        // Add the click event to mark the task as done
        doneButton.addEventListener("click", (event) => {
            const li_task = document.getElementById("li-task");

            li_task.style.color = "yellow";
            showDilogbox("Task Compleated")
            console.log("i've clicked !")

            //let's change the id of the element 
            newIdOfLi = li_task.id = `li-task-${numForId}`

        });
        return doneButton;
    }

    function delete_Button() {
        const deleteButton = document.createElement('button');
        const deleteIcon = document.createElement('span');

        deleteIcon.className = "material-symbols-outlined";
        deleteIcon.textContent = "delete";

        deleteButton.appendChild(deleteIcon);
        deleteButton.className = "delete";

        // Add the click event to delete the task
        deleteButton.addEventListener("click", (event) => {
            const li_task = document.querySelector(".tasklist");
           
            li_task.style.display = "none";
            worksData.shift();
            console.log(worksData)
            li_task.remove();


        });

        return deleteButton;
    }
    function addTask(newTask) {
        List_area = document.getElementById("List-area");
        tasks = document.getElementById("addworks");


        // creating the elements 
        const li = document.createElement("li");

        // set a id for geting delete aur completed
        li.id = "li-task";


        // now add class name to the list item 

        li.className = "tasklist";

        //now creat a span for the text 
        const span = document.createElement("span");
        span.textContent = newTask;
        span.id = "span-task";


        //creat buttons for the done the task;
        const new_dont_button = done_button();


        //creat the delete button for delet the task from the task list
        const new_del_button = delete_Button();


        const doneButton = done_button(); // Call the function here
        const deleteButton = delete_Button(); // Call the function here

        li.appendChild(span);
        li.appendChild(doneButton);
        li.appendChild(deleteButton);


        //now append in the ol
        tasks.appendChild(li);
         
        setTimeout(() => {
            li.classList.add('slide-left');
        }, 0);
        li.classList.remove('slide-left');

        if (tasks.appendChild(li)) {
            List_area.classList.add("scroll")
        }
        else {
            List_area.style.visibility = "hidden";
        }

    }


    // Declare an array to store the data


    function logic() {
        const inputDilogBox = document.getElementById("addItemsDilog");
        const inputFeidBtn = document.getElementById("save-btn");

        inputFeidBtn.addEventListener("click", () => {

            // Get the value of the input area
            const usersVal = document.getElementById("work").value;

            // Check if the user's value is not empty
            if (usersVal.trim() !== "") {
                // Add the value to the array
                worksData.push(usersVal);
                console.log(worksData);

                // Clear the input area
                document.getElementById("work").value = "";
                addTask(usersVal)


            }


            inputDilogBox.classList.add('unpop-animation'); // Apply unpop animation
            setTimeout(() => {
                inputDilogBox.classList.remove('unpop-animation'); // Remove animation class after animation ends
                inputDilogBox.style.display = 'none';
            }, 500); // Adjust the time to match the animation duration

        });
    }

    // Call the logic function to set up the event listener
    addtaskbtn = document.getElementById("addbtn");
    addtaskbtn.addEventListener("click", () => {
        logic()
        showInput();
    });
});