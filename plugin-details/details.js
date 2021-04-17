function getTemplateDetails({ data = [], placeholder = 'placeholder пустой', selectedValue }) {
  const items = data.map(item => {
    let cls
    if (item.value === selectedValue) {
      placeholder = item.value
      cls = 'list-group-item-secondary'
    }
    return `<a href="#" class="list-group-item list-group-item-action py-0 ${cls}" data-type="item" data-value="${item.value}">${item.value}</a>`
  })

  return `
    <div class="details-backdrop position-fixed top-0 start-0 end-0 bottom-0 bg-transparent" data-type="backdrop"></div>
    <summary class="d-flex align-items-center justify-content-between border px-3 rounded-2">
      <span data-type="value">${placeholder}</span>
      <i class="bi-chevron-down fs-6" data-type="arrow"></i>
    </summary>
    <div class="list-group position-absolute top-100 start-0 end-0 overflow-auto shadow-sm">${items.join('')}</div>`
}

export default class Details {
  constructor(selector, options) {
    this.$root = document.querySelector(selector) // details
    this.options = options
    this.selectedValue = options.selectedValue

    this.#render()
    this.#setup()
  }

  #render() {
    this.$root.classList.add('details', 'position-relative', 'fs-1')
    this.$root.innerHTML = getTemplateDetails(this.options)
  }

  handlerClick = (event) => {
    this.$root.hasAttribute('open') ? this.close() : this.open()

    if (event.target.dataset.type === 'item') {
      event.preventDefault()
      let value = event.target.dataset.value
      this.select(value)
    } else if (event.target.dataset.type === 'backdrop') {
      this.close()
    }
  }

  get current() {
    return this.options.data.find(item => item.value === this.selectedValue)
  }

  select(value) {
    this.selectedValue = value
    this.$value.innerHTML = this.current.value

    this.$root.querySelectorAll('[data-type="item"]').forEach(item => item.classList.remove('list-group-item-secondary'))
    this.$root.querySelector(`[data-value="${value}"]`).classList.add('list-group-item-secondary')
    this.options.onSelect ? this.options.onSelect(this.current) : null
    this.close()
  }


  #setup() {
    this.$root.addEventListener('click', this.handlerClick)
    this.$arrow = this.$root.querySelector('[data-type="arrow"]')
    this.$value = this.$root.querySelector('[data-type="value"]')
  }

  destroy() {
    this.$root.removeEventListener('click', this.handlerClick)
    this.$root.remove()
  }

  open() {
    this.$arrow.classList.remove('bi-chevron-down')
    this.$arrow.classList.add('bi-chevron-up')
  }

  close() {
    this.$root.removeAttribute('open')
    this.$arrow.classList.remove('bi-chevron-up')
    this.$arrow.classList.add('bi-chevron-down')
  }
}