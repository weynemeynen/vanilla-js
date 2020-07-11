const doc = document;
const movie = doc.getElementById('movie');
const showcase = doc.querySelector('.showcase');
const hall = doc.querySelector('.hall');
const pictureContainer = doc.querySelector('[data-picture-container]');
const picture = doc.getElementById('picture');
const seats = createSeats(places = 56, columns = 8);

const movies = [{
    "name": "Властелин колец",
    "price": 1000,
    "picture": "lord-of-rings"
  },
  {
    "name": "Хоббит",
    "price": 800,
    "picture": "hobbit"
  },
  {
    "name": "Джокер",
    "price": 700,
    "picture": "joker"
  }
];

occupiedSeats(27, 30, 36, 37, 45);
loadMovies(movies);
populateUI();

let ticketPrice = +movie.value;

// Select
function loadMovies(json) {
  const fragment = new DocumentFragment();

  json.forEach(opt => {
    option = new Option(`${opt.name} (${opt.price} руб.)`, opt.price);
    option.dataset.picture = opt.picture;
    fragment.append(option);
  });

  movie.append(fragment);
}

// создание мест (места, колонки)
function createSeats(places, columns) {
  const rows = places / columns;

  const fragment = new DocumentFragment();

  for (let l = 1; l <= rows; l++) {
    const line = doc.createElement('div');
    line.classList.add('line', 'd-flex', 'justify-content-center', 'mx-auto');

    for (let s = 1; s <= columns; s++) {
      const seat = doc.createElement('button');
      seat.type = 'button';
      seat.classList.add('btn', 'btn-secondary', 'btn-sm', 'rounded-0', 'align-top', 'seat', 'p-0', 'm-1');
      seat.title = 'свободно';

      line.append(seat);
    }

    fragment.append(line);
  }

  const numbers = fragment.querySelectorAll('.seat');

  numbers.forEach((number, index) => {
    number.dataset.number = number.innerText = index + 1;
  });

  hall.append(fragment);

  return numbers;
}

// занятые места
function occupiedSeats(...array) {
  let occupiedPlaces = [];
  for (let i = 0; i < array.length; i++) {
    let occupied = array[i] - 1;
    seats[occupied].classList.remove('btn-secondary', 'btn-success');
    seats[occupied].classList.add('btn-danger');
    seats[occupied].disabled = true;
    seats[occupied].title = 'занято';

    occupiedPlaces.push(occupied);
  }

  doc.getElementById('occupied').innerText = occupiedPlaces.length;

  return occupiedPlaces;
}

// обновление счётчика мест/ценника
function updateSelectedCount() {
  const selectedSeats = hall.querySelectorAll('.btn-success');
  const free = hall.querySelectorAll('.btn-secondary:not(.btn-success)');
  doc.getElementById('free').innerText = free.length;

  // ценник
  const pictureContainer = doc.querySelector('[data-picture-container]');

  // номера мест
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selected = doc.getElementById('selected');

  selected.innerText = selectedSeats.length;
  
  pictureContainer.dataset.price = selectedSeats.length * ticketPrice;
  
  selectedSeats.length * ticketPrice;
}

function updatePicture(url) {
  const sourceJpeg = pictureContainer.querySelector('source[type="image/jpeg"]');

  sourceJpeg.srcset = picture.src = path(url);
  picture.title = picture.alt = url;
  return picture;
}

// Получение данных из localStorage populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('btn-success');
        seat.title = 'выбрано';
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movie.selectedIndex = selectedMovieIndex;
  }

  const selectedMoviePicture = localStorage.getItem('selectedMoviePicture');

  if (selectedMoviePicture !== null) {
    picture.src = selectedMoviePicture;
  }
}

// Сохранение index и price выбронного фильма
function setMovieData(movieIndex, moviePrice, moviePicture) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
  localStorage.setItem('selectedMoviePicture', moviePicture);
}

function path(url) {
  return `images/${url}.jpg`;
}

// listeners
// Выбранный фильм
movie.addEventListener('change', (event) => {
  ticketPrice = +event.target.value;
  let selectedOption = event.target.options[event.target.selectedIndex];
  let picture = selectedOption.dataset.picture;
  setMovieData(event.target.selectedIndex, event.target.value, path(picture));
  updateSelectedCount();
  updatePicture(picture);
});

hall.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.classList.contains('seat') && !event.target.classList.contains('btn-danger')) {
    if (event.target.classList.contains('btn-secondary')) {
      event.target.classList.add('btn-success');
      event.target.classList.remove('btn-secondary');
      event.target.title = 'выбрано';
    } else if (event.target.classList.contains('btn-success')) {
      event.target.classList.add('btn-secondary');
      event.target.classList.remove('btn-success');
      event.target.title = 'свободно';
    }
  }

  updateSelectedCount();
});

updateSelectedCount();