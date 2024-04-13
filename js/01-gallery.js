import { galleryItems } from './gallery-items.js';


console.log(galleryItems);

const gallery = document.querySelector('.gallery');


const markup = galleryItems
  .map(item => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </li>`;
  })
  .join('');


gallery.innerHTML = markup;


document.addEventListener('DOMContentLoaded', () => {
  const lightbox = basicLightbox.create(`
    <img src="" width="800" height="600">
  `, {
    onShow: (instance) => {  
    },
    onClose: (instance) => {     
    }
  });

  gallery.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName === 'IMG') {
      lightbox.element().querySelector('img').src = event.target.dataset.source;
      lightbox.show();
    }
  });
});
