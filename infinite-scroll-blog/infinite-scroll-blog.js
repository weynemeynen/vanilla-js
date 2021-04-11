const doc = document,
  filter = doc.getElementById('filter'),
  postsContainer = doc.getElementById('posts-container'),
  loading = doc.getElementById('loader');

let limit = 7,
  page = 1;

// получить posts API
async function getPosts() {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );

  const data = await result.json();
  return data;
}

// показать posts в DOM
async function showPosts() {
  const posts = await getPosts();
  const fragment = new DocumentFragment();

  posts.forEach((post) => {
    const postEl = getElement('li', [
      'post',
      'alert',
      'alert-warning',
      'shadow-sm',
      'mb-5',
    ]);
    postEl.setAttribute('role', 'alert');
    //
    const postNumber = getElement('span', [
      'post-number',
      'badge',
      'rounded-pill',
      'bg-white',
      'd-flex',
      'align-items-center',
      'justify-content-center',
      'p-0',
      'shadow-sm',
    ]);
    postNumber.dataset.number = post.id;
    //
    const postInfo = getElement('div', ['post-info']);
    const postTitle = getElement(
      'h4',
      ['post-title', 'alert-heading'],
      post.title
    );
    const postBody = getElement('p', ['post-body', 'mb-0'], post.body);

    postInfo.append(postTitle);
    postInfo.append(postBody);
    postEl.append(postNumber);
    postEl.append(postInfo);
    //
    fragment.append(postEl);
    postsContainer.append(fragment);
  });

  function getElement(tag, classes, content = null) {
    tag = doc.createElement(tag);
    tag.classList.add(...classes);
    if (content) tag.innerHTML = content;
    return tag;
  }
}

function showLoading() {
  loader.classList.remove('d-none');

  setTimeout(() => {
    loader.classList.add('d-none');

    setTimeout(() => {
      page++;
      showPosts();
    }, 300);
  }, 1000);
}

function filerPosts(event) {
  event.preventDefault();
  const term = event.target.value.toLowerCase();
  const posts = postsContainer.querySelectorAll('.post');

  for (let post of posts) {
    let title = post.querySelector('.post-title').innerText.toLowerCase();
    let body = post.querySelector('.post-body').innerText.toLowerCase();

    if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
      post.style.display = 'list-item';
    } else {
      post.style.display = 'none';
    }
  }
}

// Показать posts
showPosts();

addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) showLoading();
});

filter.addEventListener('input', filerPosts);
