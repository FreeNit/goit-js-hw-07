import { galleryItems } from './gallery-items.js';
// Change code below this line

// ! 1 - Creation and rendering markup

// * get gallery container
const galleryEl = document.querySelector('.gallery');

// * Function - create gallery item
function createGalleryItem(item) {
  const { preview, original, description } = item;
  let itemToInsert = `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
  `;

  return itemToInsert;
}

// for (const item of galleryItems) {
//   const { preview, original, description } = item;
//   let itemToInsert = `
//     <div class="gallery__item">
//       <a class="gallery__link" href="${original}">
//       <img
//         class="gallery__image"
//         src="${preview}"
//         data-source="${original}"
//         alt="${description}"
//       />
//     </a>
//   </div>
//   `;

//   imagesWrapper.push(itemToInsert);
// }

// * Container for all elements
const imagesWrapper = galleryItems.map(createGalleryItem).join('');

galleryEl.insertAdjacentHTML('afterbegin', imagesWrapper);

// ! 2 - Delegation and receiving url from big img (prevent default behavior for the link element)
