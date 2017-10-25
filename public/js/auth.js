const loginForm = document.querySelector('#login_form')
const username = document.querySelector('#username')
const logout = document.querySelector('#logout')
const login = document.querySelector('.login')
const content = document.querySelector('.content')
loginForm.onsubmit = loginUser
logout.onclick = logoutUser

let logged = JSON.parse(localStorage.getItem("logged"))
let user = localStorage.getItem("user")

if(logged == true) {
    login.classList.add('hide')
    content.classList.add('show')
}

function loginUser() {
    logged = true
    user = username.value
    localStorage.setItem("logged", true)
    localStorage.setItem("user", user)
    login.classList.add('hide')
    content.classList.add('show')
    previousTasks()
    mountTasks()
    return false
}

function logoutUser() {
    localStorage.removeItem('logged')
    localStorage.removeItem('user')
    window.location.reload()
}
