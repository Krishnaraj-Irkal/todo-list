const inputBox = document.querySelector('#input-box');
const taskList = document.querySelector(".taskList");

const addTodo = () => {
    if (inputBox.value === '') {
        alert('Add some task');
    } else {
        const li = document.createElement('li');
        li.innerHTML = `<div>
        <button>
            <span class="material-symbols-outlined uncheck">
                radio_button_unchecked
            </span>
        </button>
        <div>
            <input type="text" class="task-text" value="${inputBox.value}" readonly="readonly">
        </div>
    </div>
    <div class="action">
        <button>
            <span class="material-symbols-outlined edit">
                edit
            </span> 
        </button>
        <button>
            <span class="material-symbols-outlined close">
                close
            </span>
        </button>
    </div>`
    taskList.append(li);
    inputBox.value='';
    }
    saveData();
}

taskList.addEventListener('click', (e) => {
    if (e.target.tagName === `LI`) {
        e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN' && e.target.classList.contains(`close`)) {
        const li = e.target.parentElement.parentElement.parentElement;
        li.remove();
    } else if (e.target.tagName === 'SPAN' && e.target.classList.contains(`edit`)) {
        const li = e.target.parentElement.parentElement.parentElement;
        const taskText = li.querySelector('.task-text');
        if (e.target.innerText.toLowerCase() === 'edit') {
            taskText.removeAttribute(`readonly`);
            e.target.innerHTML = 'save';
        } else {
            e.target.innerHTML = 'edit';
        }
        saveData();
    }
}, false);

const saveData = () => {
    console.log('insaveData');
    localStorage.setItem("data", taskList.innerHTML);
}

const showTask = () => {
    taskList.innerHTML =localStorage.getItem('data');
}

showTask();