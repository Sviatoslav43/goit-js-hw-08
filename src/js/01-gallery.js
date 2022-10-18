import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";


// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery')

console.log(galleryRef)


function createGalleryItemMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
            />
          </a>
      `;
    })
    .join('');
}

galleryRef.insertAdjacentHTML("beforeend", createGalleryItemMarkup(galleryItems))



new SimpleLightbox('.gallery a', { captionsData:"alt", captionDelay:250, close:true, animationSlide: true })