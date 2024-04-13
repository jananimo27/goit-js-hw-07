import { galleryItems } from './gallery-items.js';

// Log the imported gallery items to check if they are imported correctly
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

// Generate markup for each gallery item and join them into a single string
const markup = galleryItems
  .map(({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>
  `)
  .join('');

// Insert the generated markup into the gallery element
gallery.innerHTML = markup;

// Initialize SimpleLightbox and add captions
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
