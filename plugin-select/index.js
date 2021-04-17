import Select from './select.js';

const select = new Select('[data-plugin="select"]', {
  placeholder: 'выберете элемент',
  selectedId: '4',
  data: [
    { id: '0', value: 'React' },
    { id: '1', value: 'Vue' },
    { id: '2', value: 'Angular' }
  ],
  onSelect(item) {
    console.log('Выбранный элемент', item);
  },
});

select.select('0');