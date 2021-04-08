function _createModalFooter(buttons = []) {
  if (buttons.length === 0) {
    return document.createElement('div');
  }

  const footer = document.createElement('footer');
  footer.classList.add('modal-footer');

  for (const button of buttons) {
    const $button = document.createElement('button');
    $button.textContent = button.text;
    $button.classList.add('btn', `btn-${button.type || 'secondary'}`);
    $button.onclick = button.handler || (function() {})();

    footer.appendChild($button);
  }

  return footer;
}

function _createModal(options) {
  const modal = document.createElement('div');
  const modalBackdrop = document.createElement('div');

  modal.classList.add('modal', 'fade');
  modalBackdrop.classList.add('backdrop', 'fade');
  modalBackdrop.setAttribute('data-close', true);
  modal.tabindex = '-1';
  modal.innerHTML = `
    <div class="modal-dialog"
        role="document" style="max-width: ${options.maxWidth || '50%'}">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">${options.title || 'окно'}</h5>
          ${
            options.closable
              ? `<button type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close">
                  <span aria-hidden="true" data-close="true">&times;</span>
          </button>`
              : ''
          }
        </div>
        <div class="modal-body" data-content>
          ${options.content || ''}
        </div>
      </div>
    </div>
  `;
  const footer = _createModalFooter(options.footerButtons);
  document.body.appendChild(modal);
  document.body.appendChild(modalBackdrop);

  modal.querySelector('.modal-content').appendChild(footer);

  return modal;
}

$.modal = function(options) {
  const $modal = _createModal(options);
  const $modalBackdrop = document.querySelector('.backdrop');
  let destroyed = false;

  const modal = {
    open() {
      if (destroyed) {
        return console.log('destroyed');
      }
      $modal.classList.add('show');
      $modalBackdrop.classList.remove('backdrop');
      $modalBackdrop.classList.add('modal-backdrop', 'show');
    },
    close() {
      $modal.classList.remove('show');
      $modalBackdrop.classList.remove('modal-backdrop', 'show');
      if (typeof options.onClose === 'function') {
        options.onClose();
      }
    }
  };

  const listener = ev => {
    if (ev.target.dataset.close) {
      modal.close();
    }
  };

  $modal.addEventListener('click', listener);

  return Object.assign(modal, {
    destroy() {
      $modal.parentElement.removeChild($modal);
      $modalBackdrop.parentElement.removeChild($modalBackdrop);
      $modal.removeEventListener('click', listener);
      destroyed = true;
    },
    setContent(html) {
      $modal.querySelector('[data-content]').innerHTML = html;
    }
  });
};
