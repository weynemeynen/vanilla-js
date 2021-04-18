class Dropdown {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.$el.addEventListener('click', this.onClick);
    this.items = options.items;

    // this.label = document.createElement('button');
    // this.label.classList.add('btn', 'btn-primary', 'dropdown-toggle');
    // this.label.type = 'button';
    // this.label.innerHTML = 'надо что-нибудь выбрать';
    // this.$el.insertAdjacentElement('afterbegin', this.label);
    // this.$el.insertBefore(this.label, this.$el.firstChild);    

    const list = this.items.map((item, index) => {
      return `
        <a href="#" data-id="${item.id}" class="dropdown-item" tabIndex="${index + 1}">${item.label}</a>
      `;
    }).join('');

    this.label = this.$el.querySelector('.dropdown-toggle');
    this.menu = this.$el.querySelector('.dropdown-menu');
    this.menu.innerHTML = list;

    // this.dropdownMenu = document.createElement('div');
    // this.dropdownMenu.classList.add('dropdown-menu');
    // this.dropdownMenu.innerHTML = list;
    // this.$el.appendChild(this.dropdownMenu);
  }

  onClick = (ev) => {
    ev.preventDefault();
    if (ev.target.classList.contains('dropdown-toggle')) {
      this.label.tabIndex = '-1';
      this.open();
    } else if (ev.target.classList.contains('dropdown-item')) {
      this.selected(ev.target.dataset.id);
      this.close();
    }
  }

  selected(id) {
    const item = this.items.find(i => i.id === id);
    this.label.innerHTML = item.label;
  }

  open() {
    this.$el.classList.toggle('show');
    document.addEventListener('click', this.onClickDocument);
  }

  close() {
    this.$el.classList.remove('show');
    this.label.removeAttribute('tabindex');
    document.removeEventListener('click', this.onClickDocument);
  }

  // закрыть селект, если клик вне его
  onClickDocument = (ev) => {
    if (!this.$el.contains(ev.target) || ev.target === this.$el) {
      this.close();
    }
  }
}

const dropdown = new Dropdown('.dropdown', {
  items: [{
    label: 'Москва',
    id: 'msk'
  }, {
    label: 'Санкт-Петербург',
    id: 'spb'
  }, {
    label: 'Новосибирск',
    id: 'nsb'
  }, {
    label: 'Краснодар',
    id: 'krd'
  },]
});