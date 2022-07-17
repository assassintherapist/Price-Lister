const formEl = document.querySelector('form');
const tbodyEl = document.querySelector('tbody');
const ItemName = document.getElementById('name');
const ItemValue = document.getElementById('value');
const btn = document.querySelector('.button');

formEl.addEventListener('submit', onAddItems);

function onAddItems(e){
    e.preventDefault();
    const names = document.getElementById('name');
    const values = document.getElementById('value');
    if(values.value == ""){
        return;
    } else if(names.value == ''){
        return;
    } else {
        tbodyEl.innerHTML += `
        
        <tr>
        <td>${names.value}</td>
        <td>₱${values.value}</td>
        <td><button class="deleteBtn">Delete</button></td>
        </tr>
        `
    }
    
    ItemName.value = "";
    ItemValue.value = "";
     
}

tbodyEl.addEventListener('click', deleteRow);

function deleteRow(e){
    if(!e.target.classList.contains("deleteBtn")) {
        return;
    }
    const btn = e.target;
    btn.closest('tr').remove()
}
