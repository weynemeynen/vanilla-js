export function getTemplate(data = [], placeholder, selectedId) {
  let defaultText = placeholder || 'не известно что';
  // оператор ?? исправляет поведение логического оператора ||

  const items = data.map((item) => {
    let cls = '';
    if (item.id === selectedId) {
      defaultText = item.value;
      cls = 'active';
    }
    return `<li class="select__item list-group-item list-group-item-action ${cls}" data-type="list-item" data-id="${item.id}">${item.value}</li>`;
  });

  return `
  <div class="select__input d-flex align-items-center border rounded pr-5 position-relative" data-type="input">
    <span data-type="value">${defaultText}</span>
    <i class="select__icon bi bi-caret-down position-absolute" data-type="arrow"></i>
  </div>
  <ul class="select__dropdown position-absolute w-100 select__list list-group shadow">
    ${items.join('')}
  </ul>`;
}
