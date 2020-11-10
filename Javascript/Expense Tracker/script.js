let balanceEl = document.querySelector("#balance");
let incomeEl = document.querySelector("#income");
let expenseEl = document.querySelector("#expense");
let listEl = document.querySelector("#list");
let formEl = document.querySelector("#form");
let transactionEl = document.querySelector("#transaction");
let incomeAmountEl = document.querySelector("#incomeAmount");
let expenseAmountEl = document.querySelector("#expenseAmount");
let addTransactionBtnEl = document.querySelector("#submit");

//Adding Default Balance
balanceEl.innerHTML = `<h1><i class="fas fa-rupee-sign fa-1x"></i> 0</h1>`;

//Event Listener to add transaction income, expense
