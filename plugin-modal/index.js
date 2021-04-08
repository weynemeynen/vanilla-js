let fruits = [
  {
    id: 1,
    title: 'Яблоки',
    price: 20,
    img: 'https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg'
  },
  {
    id: 2,
    title: 'Апельсины',
    price: 30,
    img:
      'https://m.dom-eda.com/uploads/images/catalog/item/dfc9a3e974/3cbf3bd41c_1000.jpg'
  },
  {
    id: 3,
    title: 'Манго',
    price: 40,
    img: 'https://i2.rozetka.ua/goods/12635737/97660090_images_12635737210.png'
  }
];

const toHTML = fruit => {
  return `
    <div class="card">
      <img src="${fruit.img}"
            class="card-img-top" alt="${fruit.title}">
      <div class="card-body d-flex flex-column justify-content-end">
        <h5 class="card-title">${fruit.title}</h5>
      </div>
      <div class="card-footer text-nowrap">
        <a href="#"
            class="btn btn-primary btn-sm" data-button="price" data-id="${fruit.id}">цена</a>
        <a href="#"
            class="btn btn-danger btn-sm" data-button="remove" data-id="${fruit.id}">удалить</a>
      </div>
    </div>
  `;
};

function render() {
  // const html = fruits.map(fruit => toHTML(fruit)).join('');
  const html = fruits.map(toHTML).join('');
  document.getElementById('fruits').innerHTML = html;
}

render();

const modal = $.modal({
  title: 'Модальное окно',
  closable: true,
  maxWidth: '555px',
  footerButtons: [
    {
      text: 'OK',
      type: 'primary',
      handler() {
        modal.close();
      }
    },
    {
      text: 'Cancel',
      type: 'danger',
      handler() {
        modal.close();
      }
    }
  ]
});

const rootFruits = document.getElementById('fruits');
const handlerRootFruits = event => {
  event.preventDefault();
  const button = event.target.dataset.button;
  const id = Number(event.target.dataset.id);
  const fruit = fruits.find(fruit => fruit.id === id);

  if (button === 'price') {
    modal.setContent(`${fruit.title}, цена: ${fruit.price}руб.`);
    modal.open();
  } else if (button === 'remove') {
    $.confirm({
      title: 'Вы уверены?',
      content: `<p class="card-text">вы удаляете ${fruit.title}</p>`
    })
      .then(() => {
        fruits = fruits.filter(fruit => fruit.id !== id);
        render();
      })
      .catch(error => {
        console.log('Cancel', error);
      });
  }
};

rootFruits.addEventListener('click', handlerRootFruits);
