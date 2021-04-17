import Details from './details.js';

const details = new Details('[data-plugin="details"]', {
  placeholder: 'нужно что-нибудь выбрать',
  data: [
    { id: '1', value: 'React' },
    { id: '3', value: 'Vue' },
    { id: '2', value: 'Angular' }
  ],
  selectedValue: 'Vue',
  onSelect(item) {
    console.log('item', item)
  }
})

details.select('Vue');