import { getTemplate } from './getTemplate.js';

export default class Select {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.options = options;
    this.selectedId = options.selectedId;

    this.render();
    this.setup();
  }

  render() {
    const { data, selectedId, placeholder } = this.options;
    this.$el.classList.add('select', 'position-relative');
    this.$el.innerHTML = getTemplate(data, placeholder, selectedId);
  }

  setup() {
    //     this.clickHandler = this.clickHandler.bind(this);
    this.$el.addEventListener('click', this.clickHandler);
    this.$arrow = this.$el.querySelector('[data-type="arrow"]');
    this.$value = this.$el.querySelector('[data-type="value"]');
  }

  clickHandler = (event) => {
    if (event.target.dataset.type === 'list-item') {
      this.select(event.target.dataset.id);
    }
    this.toggle();
  };

  get current() {
    return this.options.data.find((item) => item.id === this.selectedId);
  }

  select(id) {
    this.selectedId = id;
    this.$value.innerText = this.current.value;

    this.$el
      .querySelectorAll('[data-type="list-item"]')
      .forEach((item) => item.classList.remove('active'));

    this.$el.querySelector(`[data-id="${id}"]`).classList.add('active');

    this.options.onSelect ? this.options.onSelect(this.current) : null;

    return this.selectedId;
  }

  get isOpen() {
    return this.$el.classList.contains('open');
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  destroy() {
    this.$el.removeEventListener('click', this.clickHandler);
    this.$el.remove();
  }

  open() {
    this.$el.classList.add('open');
    this.$arrow.classList.remove('bi-caret-down');
    this.$arrow.classList.add('bi-caret-up');
  }

  close() {
    this.$el.classList.remove('open');
    this.$arrow.classList.add('bi-caret-down');
    this.$arrow.classList.remove('bi-caret-up');
  }
}
