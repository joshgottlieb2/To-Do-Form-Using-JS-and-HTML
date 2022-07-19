let toDoItemsEl = document.getElementById('toDoItems');


let formEl = document.getElementById('toDoForm');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    let toDoInput = document.getElementById('toDoItem')

    if (toDoInput.value !== '') {
        let toDoItemHTML = `
            <div class="card" id="card-1">
                <div class="card-body">
                    <h4 class="card-title">To-Do</h4>
                    <p class="card-text">${toDoInput.value}</p>
                </div>
            </div>
        `
        toDoItemsEl.innerHTML += toDoItemHTML

        toDoInput.value = ''


    }

})

let clearButton = document.getElementById('clearButton');

clearButton.addEventListener('click', (event) => {
    toDoItemsEl.innerHTML = ''
})