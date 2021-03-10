;(async () => {
  const doc = document
  const module = await import('./keySkills.js'),
    keySkills = module.keySkills

  document.querySelectorAll('.cutaway').forEach((card) => {
    ;(card = doc.querySelector('.cutaway')),
      (cardList = card.querySelector('.card-list')),
      (cardInnerBack = card.querySelector('.card-inner-back')),
      (cardInnerBackTitle = cardInnerBack.querySelector('.card-title')),
      (cardInnerBackLogo = cardInnerBack.querySelector('.card-logo')),
      (cardInnerBackText = cardInnerBack.querySelector('.card-text')),
      (svgFlip = card.querySelector('.svg-flip'))

    keySkills.forEach(loadKeySkills)

    function loadKeySkills(item) {
      const itemEl = doc.createElement('button')
      itemEl.innerText = item.name
      itemEl.classList.add(
        'btn',
        'btn-outline-secondary',
        'btn-sm',
        'p-1',
        'mr-1',
        'me-1',
        'mb-1'
      )
      cardList.append(itemEl)
    }

    function handleFlip(event) {
      card.classList.toggle('flip')
      card.removeEventListener('click', handleFlip)

      svgFlip.addEventListener('click', handleClickFlip)
      document.addEventListener('keydown', handleClickFlip)

      function handleClickFlip(event) {
        event.preventDefault()
        if (event.type === 'click' || event.key === 'Escape') {
          card.classList.remove('flip')
          svgFlip.removeEventListener('click', handleClickFlip)
        }
      }
    }

    function renderBack(el) {
      const {name, logo, description, version, url} = el

      const _version = doc.createElement('small')
      _version.classList.add('text-muted', 'mx-2')
      _version.innerText = version ? `v${version}` : ''

      cardInnerBackLogo.innerHTML = `${logo}<a href="${url}" class="stretched-link" target="_blank"></a>`

      cardInnerBackTitle.innerText = name
      cardInnerBackTitle.append(_version, svgFlip)

      cardInnerBackText.innerHTML = description

      svgFlip.classList.remove('d-none')
      svgFlip.classList.add('ml-auto', 'ms-auto')
    }

    // listeners
    cardList.addEventListener('click', (event) => {
      if (event.target.tagName !== 'BUTTON') return
      event.preventDefault()

      card.addEventListener('click', handleFlip)
      const result = keySkills.find(
        (skill) => skill.name === event.target.innerText
      )

      renderBack(result)
    })
  })
})()
