import { numberPhotoUsers } from './data.js';

const miniaturesFragment = document.createDocumentFragment();


//Добавление
const miniaturesList = document.querySelector('.pictures');
//Шаблон
const miniaturesTemplate = document.querySelector('#picture').content;

const simularMiniatures = numberPhotoUsers;
simularMiniatures.forEach(({url, likes, comments})=>{
  const miniatures = miniaturesTemplate.cloneNode(true);
  miniatures.querySelector('.picture__img').src = url;
  miniatures.querySelector('.picture__likes').textContent=likes;
  miniatures.querySelector('.picture__comments').textContent=comments.length;
  miniaturesFragment.appendChild(miniatures);
});
miniaturesList.appendChild(miniaturesFragment);
export { miniaturesList };
