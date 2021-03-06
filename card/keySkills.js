const keySkills = [
  {
    name: 'HTML',
    version: '5',
    logo:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M108.4 0h23v22.8h21.2V0h23v69h-23V46h-21v23h-23.2M206 23h-20.3V0h63.7v23H229v46h-23M259.5 0h24.1l14.8 24.3L313.2 0h24.1v69h-23V34.8l-16.1 24.8l-16.1-24.8v34.2h-22.6M348.7 0h23v46.2h32.6V69h-55.6"/><path fill="#e44d26" d="M107.6 471l-33-370.4h362.8l-33 370.2L255.7 512"/><path fill="#f16529" d="M256 480.5V131H404.3L376 447"/><path fill="#ebebeb" d="M142 176.3h114v45.4h-64.2l4.2 46.5h60v45.3H154.4M156.4 336.3H202l3.2 36.3 50.8 13.6v47.4l-93.2-26"/><path fill="#fff" d="M369.6 176.3H255.8v45.4h109.6M361.3 268.2H255.8v45.4h56l-5.3 59-50.7 13.6v47.2l93-25.8"/></svg>',
    description:
      'Семантический HTML-код — подход основанный на использовании HTML-тегов в соответствии с их семантикой, а также предполагающий логичную и последовательную иерархию.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    name: 'CSS',
    version: '3',
    logo:
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 296297 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><defs><linearGradient id="id4" gradientUnits="userSpaceOnUse" x1="54128.7" y1="79355.5" x2="240318" y2="79355.5"><stop offset="0" stop-color="#e8e7e5"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="id5" gradientUnits="userSpaceOnUse" x1="62019.3" y1="202868" x2="233515" y2="202868"><stop offset="0" stop-color="#e8e7e5"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="id6" gradientUnits="userSpaceOnUse" x1="104963" y1="99616.9" x2="104963" y2="171021"><stop offset="0" stop-color="#d1d3d4"/><stop offset=".388" stop-color="#d1d3d4"/><stop offset="1" stop-color="#d1d3d4"/></linearGradient><linearGradient id="id7" gradientUnits="userSpaceOnUse" xlink:href="#id6" x1="194179" y1="61185.8" x2="194179" y2="135407"/><mask id="id0"><linearGradient id="id1" gradientUnits="userSpaceOnUse" x1="104963" y1="99616.9" x2="104963" y2="171021"><stop offset="0" stop-opacity="0" stop-color="#fff"/><stop offset=".388" stop-color="#fff"/><stop offset="1" stop-opacity=".831" stop-color="#fff"/></linearGradient><path fill="url(#id1)" d="M61737 99467h86453v71704H61737z"/></mask><mask id="id2"><linearGradient id="id3" gradientUnits="userSpaceOnUse" x1="194179" y1="61185.8" x2="194179" y2="135407"><stop offset="0" stop-opacity="0" stop-color="#fff"/><stop offset=".388" stop-color="#fff"/><stop offset="1" stop-opacity=".831" stop-color="#fff"/></linearGradient><path fill="url(#id3)" d="M147890 61036h92578v74521h-92578z"/></mask><style>.fil6{fill:#000;fill-opacity:.05098}</style></defs><g id="Layer_x0020_1"><g id="_513085304"><path fill="#2062af" d="M268517 300922l-120369 32411-120371-32411L0 0h296297z"/><path fill="#3c9cd7" d="M148146 24374v283109l273 74 97409-26229 22485-256954z"/><path fill="#fff" d="M148040 99617l-86153 35880 2857 35524 83296-35614 88604-37883 3674-36339-92278 38432z"/><path mask="url(#id0)" fill="url(#id6)" d="M61887 135497l2857 35524 83295-35614V99617z"/><path mask="url(#id2)" fill="url(#id7)" d="M240318 61186l-92278 38431v35790l88604-37883z"/><path fill="url(#id5)" d="M62019 135497l2858 35524 127806 407-2859 47365-42055 11840-40428-10208-2450-29399H67327l4900 56756 75950 22457 75538-22050 9800-112692z"/><path class="fil6" d="M148040 135497H61888l2857 35524 83295 266v-35790zm0 95022l-408 114-40422-10208-2450-29399H67197l4899 56756 75944 22457v-39720z"/><path fill="url(#id4)" d="M54129 61186h186189l-3674 36339H58620l-4491-36339z"/><path class="fil6" d="M148040 61186H54129l4491 36339h89420z"/></g></g></svg>',
    description:
      'CSS — формальный язык описания внешнего вида документа, написанного с использованием языка разметки.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    name: 'JavaScript',
    version: 'ES6',
    logo:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630"><rect width="630" height="630" fill="#f7df1e"/><path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"/></svg>',
    description:
      'JavaScript (/ˈdʒɑːvɑːˌskrɪpt/; аббр. JS /ˈdʒeɪ.ɛs./) — мультипарадигменный язык программирования.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference',
  },
  {
    name: 'SASS',
    version: '3.5.3',
    logo:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 384"><path fill="#CF649A" d="M440.6 220.6c-17.9.1-33.4 4.4-46.4 10.8-4.8-9.5-9.6-17.8-10.4-24-.9-7.2-2-11.6-.9-20.2s6.1-20.8 6.1-21.8c-.1-.9-1.1-5.3-11.4-5.4-10.3-.1-19.2 2-20.2 4.7s-3 8.9-4.3 15.3c-1.8 9.4-20.6 42.7-31.3 60.2-3.5-6.8-6.5-12.8-7.1-17.6-.9-7.2-2-11.6-.9-20.2s6.1-20.8 6.1-21.8c-.1-.9-1.1-5.3-11.4-5.4-10.3-.1-19.2 2-20.2 4.7s-2.1 9.1-4.3 15.3c-2.1 6.2-27.1 61.8-33.6 76.3-3.3 7.4-6.2 13.3-8.3 17.3s-.1.3-.3.7c-1.8 3.4-2.8 5.3-2.8 5.3v.1c-1.4 2.5-2.9 4.9-3.6 4.9-.5 0-1.5-6.7.2-15.9 3.7-19.3 12.7-49.4 12.6-50.5 0-.5 1.7-5.8-5.8-8.5-7.3-2.7-9.9 1.8-10.5 1.8-.6 0-1.1 1.6-1.1 1.6s8.1-33.9-15.5-33.9c-14.8 0-35.2 16.1-45.3 30.8-6.4 3.5-20 10.9-34.4 18.8-5.5 3-11.2 6.2-16.6 9.1l-1.1-1.2c-28.6-30.5-81.5-52.1-79.3-93.1.8-14.9 6-54.2 101.6-101.8 78.3-39 141-28.3 151.9-4.5 15.5 34-33.5 97.2-114.9 106.3-31 3.5-47.3-8.5-51.4-13-4.3-4.7-4.9-4.9-6.5-4-2.6 1.4-1 5.6 0 8.1 2.4 6.3 12.4 17.5 29.4 23.1 14.9 4.9 51.3 7.6 95.3-9.4 49.3-19.1 87.8-72.1 76.5-116.4-11.5-45.1-86.3-59.9-157-34.8-42.1 15-87.7 38.4-120.5 69.1-39 36.4-45.2 68.2-42.6 81.4 9.1 47.1 74 77.8 100 100.5-1.3.7-2.5 1.4-3.6 2-13 6.4-62.5 32.3-74.9 59.7-14 31 2.2 53.3 13 56.3 33.4 9.3 67.6-7.4 86.1-34.9 18.4-27.5 16.2-63.2 7.7-79.5l-.3-.6 10.2-6c6.6-3.9 13.1-7.5 18.8-10.6-3.2 8.7-5.5 19-6.7 34-1.4 17.6 5.8 40.4 15.3 49.4 4.2 3.9 9.2 4 12.3 4 11 0 16-9.1 21.5-20 6.8-13.3 12.8-28.7 12.8-28.7s-7.5 41.7 13 41.7c7.5 0 15-9.7 18.4-14.7v.1s.2-.3.6-1c.8-1.2 1.2-1.9 1.2-1.9v-.2c3-5.2 9.7-17.1 19.7-36.8 12.9-25.4 25.3-57.2 25.3-57.2s1.2 7.8 4.9 20.6c2.2 7.6 7 15.9 10.7 24-3 4.2-4.8 6.6-4.8 6.6l.1.1c-2.4 3.2-5.1 6.6-7.9 10-10.2 12.2-22.4 26.1-24 30.1-1.9 4.7-1.5 8.2 2.2 11 2.7 2 7.5 2.4 12.6 2 9.2-.6 15.6-2.9 18.8-4.3 5-1.8 10.7-4.5 16.2-8.5 10-7.4 16.1-17.9 15.5-31.9-.3-7.7-2.8-15.3-5.9-22.5.9-1.3 1.8-2.6 2.7-4 15.8-23.1 28-48.5 28-48.5s1.2 7.8 4.9 20.6c1.9 6.5 5.7 13.6 9.1 20.6-14.8 12.1-24.1 26.1-27.3 35.3-5.9 17-1.3 24.7 7.4 26.5 3.9.8 9.5-1 13.7-2.8 5.2-1.7 11.5-4.6 17.3-8.9 10-7.4 19.6-17.7 19.1-31.6-.3-6.4-2-12.7-4.3-18.7 12.6-5.2 28.9-8.2 49.6-5.7 44.5 5.2 53.3 33 51.6 44.6-1.7 11.6-11 18-14.1 20-3.1 1.9-4.1 2.6-3.8 4 .4 2.1 1.8 2 4.5 1.6 3.7-.6 23.4-9.5 24.2-30.9 1.2-27.5-24.9-57.5-71.2-57.2zm-343.2 115.7c-14.7 16.1-35.4 22.2-44.2 17-9.5-5.5-5.8-29.2 12.3-46.3 11-10.4 25.3-20 34.7-25.9 2.1-1.3 5.3-3.2 9.1-5.5.6-.4 1-.6 1-.6.7-.4 1.5-.9 2.3-1.4 6.7 24.4.3 45.8-15.2 62.7zm107.5-73.1c-5.1 12.5-15.9 44.6-22.4 42.8-5.6-1.5-9-25.8-1.1-49.8 4-12.1 12.5-26.5 17.5-32.1 8.1-9 16.9-12 19.1-8.3 2.6 4.8-9.9 39.6-13.1 47.4zm88.7 42.4c-2.2 1.1-4.2 1.9-5.1 1.3-.7-.4.9-1.9.9-1.9s11.1-11.9 15.5-17.4c2.5-3.2 5.5-6.9 8.7-11.1v1.2c0 14.4-13.8 24-20 27.9zm68.4-15.6c-1.6-1.2-1.4-4.9 4-16.5 2.1-4.6 6.9-12.3 15.2-19.6 1 3 1.6 5.9 1.5 8.6-.1 18-12.9 24.7-20.7 27.5z"/></svg>',
    description:
      'Sass — это метаязык на основе CSS, предназначенный для увеличения уровня абстракции CSS кода и упрощения файлов каскадных таблиц стилей.',
    url: 'https://sass-lang.com/',
  },
  {
    name: 'React',
    version: '16.12.0',
    logo:
      '<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K">',
    description:
      'React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.',
    url: 'https://reactjs.org/',
  },
  {
    name: 'Webpack',
    version: '4',
    logo:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200"><path fill="#FFF" d="M600 0l530.3 300v600L600 1200 69.7 900V300z"/><path fill="#8ED6FB" d="M1035.6 879.3l-418.1 236.5V931.6L878 788.3l157.6 91zm28.6-25.9V358.8l-153 88.3V765l153 88.4zm-901.5 25.9l418.1 236.5V931.6L320.3 788.3l-157.6 91zm-28.6-25.9V358.8l153 88.3V765l-153 88.4zM152 326.8L580.8 84.2v178.1L306.1 413.4l-2.1 1.2-152-87.8zm894.3 0L617.5 84.2v178.1l274.7 151.1 2.1 1.2 152-87.8z" class="st1"/><path fill="#1C78C0" d="M580.8 889.7l-257-141.3v-280l257 148.4v272.9zm36.7 0l257-141.3v-280l-257 148.4v272.9zm-18.3-283.6zM341.2 436l258-141.9 258 141.9-258 149-258-149z"/></svg>',
    description:
      'Webpack - это пакет модулей JavaScript с открытым исходным кодом. Он сделан в основном для JavaScript, но он может преобразовывать внешние ресурсы.',
    url: 'https://webpack.js.org/',
  },
  {
    name: 'W3C Standards',
    version: '',
    logo:
      '<img src="data:image/png;base64,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" class="rISBZc M4dUYb">',
    description:
      'Консо́рциум Всеми́рной паути́ны — организация, разрабатывающая и внедряющая технологические стандарты для Всемирной паутины.',
    url: 'https://www.w3.org/standards/',
  },
  {
    name: 'Git',
    version: '2.27.0',
    logo: '<img src="https://git-scm.com/images/logo@2x.png">',
    description: 'Git — распределённая система управления версиями.',
    url: 'https://git-scm.com/',
  },
  {
    name: 'БЭМ',
    version: '4.2.0',
    logo:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.7 84"><path d="M0 13h23.8v7H0zM0 0h23.8v7H0zm42.7 25.9H0v7h41.1c4.5 0 15 .1 18.9 6.4v-3.9c-1.9-6.2-7.5-9.5-17.3-9.5zm.1 13H0v7h41.1c10 0 16.3.4 18.9 1.8v-3.1c-2-4.9-10.4-5.7-17.2-5.7zm-.1 33H0v-7h41.1c4.5 0 15-.1 18.9-6.4v3.9c-1.9 6.2-7.5 9.5-17.3 9.5zm.1-13H0v-7h41.1c10 0 16.3-.4 18.9-1.8v3.1c-2 4.9-10.4 5.7-17.2 5.7zM70.4 84h31.4v-4.3H71.3c-2.7 0-9.1-.1-11.4-3.8v2.4C61 82 64.4 84 70.4 84zm-.1-7.9h31.4v-4.3H71.3c-6.1 0-9.9-.2-11.4-1.1v1.9c1.2 3 6.3 3.5 10.4 3.5z"></path></svg>',
    description:
      'Методология БЭМ создана в Яндексе для разработки сайтов, которые надо делать быстро,а поддерживать долгие годы. Она позволяет создавать расширяемые и повторно используемые компоненты интерфейса.',
    url: 'https://ru.bem.info/',
  },
  {
    name: 'bootstrap',
    // version: '4.5.0',
    logo:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612"><path fill="currentColor" d="M510 8a94.3 94.3 0 0 1 94 94v408a94.3 94.3 0 0 1-94 94H102a94.3 94.3 0 0 1-94-94V102a94.3 94.3 0 0 1 94-94h408m0-8H102C45.9 0 0 45.9 0 102v408c0 56.1 45.9 102 102 102h408c56.1 0 102-45.9 102-102V102C612 45.9 566.1 0 510 0z"></path><path fill="currentColor" d="M196.77 471.5V154.43h124.15c54.27 0 91 31.64 91 79.1 0 33-24.17 63.72-54.71 69.21v1.76c43.07 5.49 70.75 35.82 70.75 78 0 55.81-40 89-107.45 89zm39.55-180.4h63.28c46.8 0 72.29-18.68 72.29-53 0-31.42-21.53-48.78-60-48.78h-75.57zm78.22 145.46c47.68 0 72.73-19.34 72.73-56s-25.93-55.37-76.46-55.37h-74.49v111.4z"></path></svg>',
    description:
      'Bootstrap — свободный набор инструментов для создания сайтов и веб-приложений. Включает в себя HTML- и CSS-шаблоны оформления для типографики, веб-форм, кнопок, меток, блоков навигации и прочих компонентов веб-интерфейса.',
    url: 'https://getbootstrap.com/',
  }, // 'material-ui',
  // 'devextreme',
  // 'Figma',
  // 'Ajax',
  // 'SEO',
  // 'schema.org',
]

export {keySkills}
