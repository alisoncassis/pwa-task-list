const taskForm = document.querySelector('#task_form')
const description = document.querySelector('#description')
const tasksWrapper = document.querySelector('.tasks-wrapper')
let tasks = []


window.onload = function() {
    taskForm.onsubmit = addTask
    document.querySelector('body').onclick = bindBtnsRemove
    previousTasks()
    mountTasks()
}

function bindBtnsRemove(event) {
    const element = event.target
    if(element.classList.contains('btn-remove')) {
        const parent = element.parentNode.parentNode
        const text = parent.querySelector('.task-text').textContent
        const src = parent.querySelector('.task-img').getAttribute('src')
        removeTask(text, src)
        parent.parentNode.removeChild(parent)
    }
}

function removeTask(text, src) {
    tasks = tasks.filter(task => {
        if(task.text != text || task.src != src) return task
    })
    localStorage.setItem(user, JSON.stringify(tasks))
}

function addTask() {
    const value = description.value
    const text = value.substr(0, value.indexOf('[') - 1) || value
    const src = value.substr(value.indexOf('[') + 1, value.indexOf(']') - 1) || ''
    tasks.push({text, src})
    localStorage.setItem(user, JSON.stringify(tasks))
    description.value = ''
    tasksWrapper.innerHTML += mountElement({text, src})
    return false
}

function previousTasks() {
    tasks = JSON.parse(localStorage.getItem(user) || '[]');
}

function mountTasks() {
    console.log(tasks)
    tasks.forEach(task => {
        tasksWrapper.innerHTML += mountElement(task)
    })
}

function mountElement(task) {
    const element = `<div class="task">
        <p class="lead col-xs-8 task-text">${task.text}</p>
        <img class="task-img" src="${task.src != '' ? task.src : ''}" />
        <div class="text-right col-xs-4">
            <button type="button" class="btn btn-danger btn-remove">Remove</button>
        </div>
    </div>`
    return element
}
