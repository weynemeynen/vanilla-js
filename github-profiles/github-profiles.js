const APIURL = 'https://api.github.com/users/'

const form = document.getElementById('form')
const search = form.querySelector('#search')
const main = document.getElementById('main')

async function getUser(username) {
  try {
    const {data} = await axios(APIURL + username)
    createUserCard(data)
    getRepos(username)
  } catch (error) {
    if (error.response.status == 404) {
      createErrorCard('Нет профиля с таким именем')
    }
  }
}

async function getRepos(username) {
  try {
    const {data} = await axios(APIURL + username + '/repos?sort=created')
    addReposToCard(data)
  } catch (error) {
    createErrorCard('Проблема с получением repos')
  }
}

function createErrorCard(message) {
  const cardHTML = `
    <div class="alert alert-warning text-center display-3">
      ${message}
    </div>
  `
  main.innerHTML = cardHTML
}

function createUserCard(user) {
  const {avatar_url, name, bio} = user
  const cardHTML = `
    <div class="card text-center col-lg-6 mx-auto p-0">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${avatar_url}" class="img-fluid p-3" alt="${name}">
          </div>
          <div class="col-md-8">
            <div class="card-header bg-transparent border-start">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="true" href="#">Профиль</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Работы</a>
                </li>
              </ul>
            </div>
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${bio}</p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">An item</li>
                <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li>
              </ul>
              <div id="repos" class=my-3></div>
            </div>
            <div class="card-footer bg-transparent border-top-0"></div>
          </div>
        </div>
      </div>
  `

  main.innerHTML = cardHTML
}

function addReposToCard(repos) {
  const reposEl = main.querySelector('#repos')

  repos.forEach((repo) => {
    const repoEl = document.createElement('a')
    repoEl.classList.add('btn', 'btn-outline-primary', 'btn-sm')
    repoEl.href = repo.html_url
    repoEl.target = '_blank'
    repoEl.innerText = repo.name
    reposEl.append(repoEl)
  })
}

form.addEventListener('submit', (event) => {
  event.preventDefault()

  const user = search.value

  if (user) {
    getUser(user)
  }

  search.value = ''
})
