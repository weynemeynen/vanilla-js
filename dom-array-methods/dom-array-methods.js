const doc = document,
  main = doc.querySelector('main'),
  list = main.querySelector('ul'),
  addUser = doc.getElementById('add-user'),
  double = doc.getElementById('double'),
  showMillionairesBtn = doc.getElementById('show-millionaires'),
  sort = doc.getElementById('sort'),
  calculateWealthBtn = doc.getElementById('calculate-wealth');

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

async function getRandomUser() {
  const result = await fetch('https://randomuser.me/api');
  const json = await result.json();

  const user = json.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
    img: `${user.picture.thumbnail}`,
  };

  data.push(newUser);
  updateDOM();
}

function doubleMoney() {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 };
  });

  updateDOM();
}

function sortByRichest() {
  data.sort((a, b) => b.money - a.money);

  updateDOM();
}

function showMillionaires() {
  data = data.filter((user) => user.money > 1000000);

  updateDOM();
}

function calculateWealth() {
  const calculate = main.querySelector('h3');
  if (calculate) calculate.remove();

  const wealth = data.reduce((acc, user) => (acc += user.money), 0);

  const element = doc.createElement('h3');
  element.innerHTML = `<strong>${formatMoney(wealth)}</strong>`;
  main.append(element);
}

function updateDOM(providedData = data) {
  list.innerHTML = '';

  providedData.forEach((item) => {
    const element = doc.createElement('li');
    element.classList.add('person');
    element.innerHTML = `
      <img src="${item.img}">
      <strong>${item.name}</strong>
      <span>${formatMoney(item.money)}</span>
    `;

    list.append(element);
  });
}

function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

addUser.addEventListener('click', getRandomUser);
double.addEventListener('click', doubleMoney);
sort.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth);
