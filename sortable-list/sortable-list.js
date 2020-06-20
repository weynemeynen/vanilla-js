const doc = document,
  draggableList = doc.getElementById('draggable-list'),
  check = doc.getElementById('check');

const richestPeople = [
  'Василий Иванович',
  'Товарищ Сухов',
  'Егор Прокудин',
  'Сте́нька Ра́зин',
  'Юрий Гагарин',
];

let listItems = [];
let dragStartIndex;

createList(richestPeople);

function clearList() {
  listItems = [];
  draggableList.innerHTML = '';
}

function createList(arr) {
  clearList();

  [...arr].forEach((person, index) => {
    const listItem = doc.createElement('li');
    listItem.classList.add(
      'list-group-item',
      'list-group-item-action',
      'd-flex',
      'justify-content-between',
      'align-items-center',
      'draggable'
    );
    listItem.dataset.index = index;
    listItem.draggable = true;

    const number = doc.createElement('span');
    number.innerHTML = index + 1;
    numberClasses = ['badge', 'badge-secondary', 'mr-2'];
    number.classList.add(...numberClasses);

    const personName = doc.createElement('strong');
    personName.innerHTML = person;

    const grip = `<svg class="bi bi-grip-horizontal svg-grip ml-auto" width="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>`;

    listItem.innerHTML = grip;
    listItem.prepend(number, personName);

    listItems.push(listItem);
    draggableList.append(listItem);

    addEventListeners();
  });
}

function dragStart() {
  dragStartIndex = +this.dataset.index;
}

function dragEnter(event) {
  this.classList.add('active');
}

function dragLeave() {
  this.classList.remove('active');
}

function dragOver(event) {
  event.preventDefault();
}

function dragDrop() {
  const dragEndIndex = +this.dataset.index;

  swapItems(dragStartIndex, dragEndIndex);
  this.classList.remove('active');
}

function swapItems(start, end) {
  let newListItems = [...listItems].map((item) => {
    const personName = item.querySelector('strong').innerText;
    return personName;
  });

  let removedStart = newListItems.splice(start, 1);
  newListItems.splice(end, 0, removedStart);

  createList(newListItems);
}

function addEventListeners() {
  const draggables = draggableList.querySelectorAll('.draggable');

  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', dragStart);
    draggable.addEventListener('dragover', dragOver);
    draggable.addEventListener('drop', dragDrop);
    draggable.addEventListener('dragenter', dragEnter);
    draggable.addEventListener('dragleave', dragLeave);
  });
}