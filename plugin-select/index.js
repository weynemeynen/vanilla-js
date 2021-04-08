import { Select } from './select.js';

const select = new Select('[data-select]', {
  placeholder: 'выберете элемент',
  selectedId: '4',
  data: [
    { id: '1', value: 'React' },
    { id: '3', value: 'Vue' },
    { id: '2', value: 'Angular' }
  ],
  onSelect(item) {
    console.log('Выбранный элемент', item);
  },
});

// select.select('2');

window.select = select;
