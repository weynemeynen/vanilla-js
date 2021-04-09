const progress = document.querySelector('.progress')
const progressBar = progress.querySelector('.progress-bar')
const circles = progress.querySelectorAll('.progress__circle')
circles.forEach((circle, index) => {
  circle.innerHTML = index + 1
})

const progressWidget = document.querySelector('.progress-widget')
const prev = progressWidget.querySelector('.prev')
const next = progressWidget.querySelector('.next')

let currentActive = 1

next.addEventListener('click', () => {
  currentActive++
  if (currentActive > circles.length) {
    currentActive = circles.length
  }
  update()
})
prev.addEventListener('click', () => {
  currentActive--
  if (currentActive < 1) {
    currentActive = 1
  }
  update()
})

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('border-primary', 'active')
    } else {
      circle.classList.remove('border-primary', 'active')
    }
  })

  const actives = document.querySelectorAll('.active')

  progressBar.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = next.disabled = false
  }
}
