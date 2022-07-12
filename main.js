document.getElementById("expForm").addEventListener("submit", addExpense);

const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;

    if(name.length > 0 && amount > 0) {
        const expense = {
            name,
            amount,
            id: expenses.length > 0 ? expenses[expenses.length - 1].id + 1: 1,
        }
        expenses.push(expense);
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }

    document.getElementById("expForm").reset();

    showExpenses();

}

const showExpenses = () => {
      const expenseTable = document.getElementById("expenseTable");

      expenseTable.innerHTML = "";
      
      for(let i = 0; i < expenses.length; i++) {
        expenseTable.innerHTML += `
        
        <tr>
        <td>${expenses[i].name}</td>
        <td>${expenses[i].amount}</td>
        <td> <a class="deleteButton" onclick="deleteExpenses(${expenses[i].id})"> Delete </td>
        <td></td>
        </tr>
        
        `;

      }
}

const deleteExpenses = (id) => {
    for(let i = 0; i < expenses.length; i++) {
        if(expenses[i].id == id) {
            expenses.splice(i, 1);
        }
    }

    localStorage.setItem("expenses", JSON.stringify(expenses));
    showExpenses();
}

showExpenses();
