let form = document.querySelector("form")
let input = document.querySelector("input")
let output = document.querySelector(".output")

function getTodo (value){
    let todo = document.createElement("div");
    let textEl = document.createElement("span");
    textEl.innerHTML = value;
    todo.appendChild(textEl)

    let closeEl = document.createElement("span")
    closeEl.innerHTML = "&times;"
    closeEl.classList.add("delete")

    closeEl.addEventListener("click" ,()=>{
        output.removeChild(todo)
    })

    todo.appendChild(closeEl)
    todo.classList.add("todo")
    return todo
}

form.addEventListener("submit" , e=>{
    e.preventDefault()
    let value = input.value
    if(!value.trim()) return
    output.appendChild(getTodo(value))
    input.value = ''
})