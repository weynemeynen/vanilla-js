const doc = document,
  balance = doc.getElementById('balance'),
  money_plus = doc.getElementById('money-plus'),
  money_minus = doc.getElementById('money-minus'),
  list = doc.getElementById('list'),
  form = doc.getElementById('form'),
  text = form.querySelector('#text'),
  amount = form.querySelector('#amount'),
  submitBtn = form.querySelector('button[type="submit"]');

const localStorageTransactions = JSON.parse(
  localStorage.getItem('transactions')
);

let transactions =
  localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

function addTransaction(event) {
  event.preventDefault();

  if (text.value.trim() === '' || amount.value.trim() === '') {
    alert('Введите текст и сумму');
  } else {
    const transaction = {
      id: generateId(),
      text: text.value,
      amount: +amount.value,
    };

    transactions.push(transaction);
    addTransactionDOM(transaction);
    updateValues();
    updateLocalStorage();

    text.value = amount.value = '';
  }
}

function generateId() {
  return Math.floor(Math.random() * 100000000);
}

function addTransactionDOM(transaction) {
  const item = document.createElement('li');
  item.classList.add(
    'list-group-item',
    'justify-content-between',
    'd-flex',
    'mb-2',
    'shadow-sm',
    transaction.amount < 0
      ? 'list-group-item-danger'
      : 'list-group-item-success'
  );

  item.innerHTML = `
    ${transaction.text} <span class="badge badge-light">${Math.abs(
    transaction.amount
  )}</span>
    <button class="button-delete btn btn-danger btn-sm position-absolute rounded-right shadow-none" onClick="removeTransaction(${
      transaction.id
    })">&times;</button>
  `;

  list.appendChild(item);
}

function removeTransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);
  updateLocalStorage();
  init();
}

function updateValues() {
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    .toFixed(2);

  const income = amounts
    .filter((transaction) => transaction > 0)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    .toFixed(2);

  const expense = (
    amounts
      .filter((transaction) => transaction < 0)
      .reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      ) * -1
  ).toFixed(2);

  balance.innerText = `${total}`;
  money_plus.innerText = `${income}`;
  money_minus.innerText = `${expense}`;
}

function init() {
  list.innerHTML = '';
  transactions.forEach(addTransactionDOM);
  updateValues();
}

init();

form.addEventListener('submit', addTransaction);
