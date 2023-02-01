let input = document.getElementById('inputTask');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaList');
let counter = 0;

function addTask() {
    let inputValue = input.value;

    if (inputValue !== "" && inputValue !== null && inputValue !== undefined && inputValue.length > 3) {

        ++counter;
        let newItem = `<div id="${counter}" class="item">
        <div onclick="markTask(${counter})" class="item-icon">
            <span id="icon_${counter}" class="material-symbols-outlined">
                radio_button_unchecked
                </span>
        </div>
        <div  class="item-name">
            ${inputValue}
        </div>
        <div class="item-button">
            <button onclick="deleteTask(${counter})" class="delete"><span class="material-symbols-outlined">
                delete
                </span>Delete</button>
        </div>
    </div>`
        main.innerHTML += newItem;
        input.value = "";
        input.focus();

    }
    else {
        input.placeholder = "Task have more than 3 letter";
        input.style.color = "red"
        alert('Erro 202')
    }
}

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})

function markTask(id) {
    var item = document.getElementById(id);
    var class_name = item.getAttribute('class');//get  class name of item

    if (class_name == "item") {
        item.classList.add("clicked");

        var icon = document.getElementById('icon_' + id);
        icon.innerHTML = 'check_circle';

        //Add as last
        item.parentNode.appendChild(item)
    } else {
        var icon = document.getElementById('icon_' + id);
        icon.innerHTML = 'radio_button_unchecked';
        item.classList.remove("clicked");
    }

}

function deleteTask(id) {
    var task = document.getElementById(id);
    task.remove();
}

console.log(input.value.length);