const labels = document.querySelectorAll('[data-wave-animation] label')

labels.forEach((label) => {
  let input = label.previousElementSibling
  input.addEventListener('blur', () => {
    if (!input.value) {
      input.classList.remove('focus')
    } else {
      input.classList.add('focus')
    }
  })

  label.classList.add('position-absolute', 'top-0', 'start-0')
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, i) =>
        `<span style="transition-delay: ${i * 20}ms">${letter}</span>`
    )
    .join('')
})
