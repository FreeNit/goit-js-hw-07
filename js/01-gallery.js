import { galleryItems } from './gallery-items.js';
// Change code below this line

// ! 1 - Creation and rendering markup

// * get gallery container
const galleryEl = document.querySelector('.gallery');

let imgBigUrl;

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

// * Assign basicLightbox instance to a variable

let instance;

console.log(instance);

// * Prevent default behavior for the links <a>
const links = document.querySelectorAll('.gallery__link');
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
  });
});

galleryEl.addEventListener('click', onTargetImgClick);

function onTargetImgClick(event) {
  if (
    event.target.nodeName !== 'IMG' &&
    !document.querySelector('.basicLightbox ')
  ) {
    return;
  }

  // * get the big Img url and write it to the imgBiUrl variable
  imgBigUrl = event.target.dataset.source;

  // * use BasicLightBox library
  const instance = basicLightbox.create(
    `
  	<img width="1400" height="900" src="${imgBigUrl}">
  `
  );
  instance.show();

  document.addEventListener('keydown', addKeyboardHandler);

  // * add listener for keyboard
  function addKeyboardHandler(event) {
    if (event.code === 'Escape') {
      // * close modal and remove listener from keyboard
      instance.close();
      removeKeyboardHandler();
    }
  }

  // * function to remove listener from keyboard
  function removeKeyboardHandler() {
    document.removeEventListener('keydown', addKeyboardHandler);
  }
}
