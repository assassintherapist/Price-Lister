const section = document.getElementById("items")
const inputPrice = document.getElementById("input-price")
const inputItem = document.getElementById("input-item")
const addBtn = document.getElementById("submit-tab")

addBtn.addEventListener("click", () => {
    let task = document.createElement("li");
    task.innerText = `${inputItem.value}----------------------------`+ `${inputPrice.value}`;

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-class");
    deleteBtn.innerText = "Delete";
    
    
    if (inputItem.value === "") {
        alert ("Please enter any item")
    } else if (inputPrice.value === ""){
        alert("Please enter any value")
    } else {
        section.appendChild(deleteBtn)
        section.appendChild(task);
    }

    deleteBtn.addEventListener("click", () => {
        section.removeChild(task);
        section.removeChild(deleteBtn);
    })

    inputItem.value = "";
    inputPrice.value = "";
});
    
