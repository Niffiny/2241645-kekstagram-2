const randomiseValue = function(min, max) {
if (min >= 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    if (max < min) {
      const helper = min;
      min = max;
      max = helper;
    } else if (max === min) {
      return max;
    }
    return Math.floor(Math.random()*(max-min+1))+min; //нашла тут https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  }
};
const verifyLength = function(line, maxLength) {
if (line.length <= maxLength) {
return true;
} else {
    return false;
  }
};

verifyLength('Some text', 26);

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Вася',
  'Петя',
  'Сергей',
  'Галя',
  'Марина',
  'Александр',
];

const PHOTO_DESCRIPTION = [
  'Отлично',
  'Неплохо',
  'Непрофессионально',
  'Получше',
  'Лучше',
  'Неудачный момент',
];

const PHOTO_COUNT = 25;

const getRandomArrayElement = (elements) =>  elements[randomiseValue(0, elements.length - 1)];

const createUnique = (a,b) => {
  const arr = [];
  const total = b - a + 1;
  do {
    const randomNumber = randomiseValue(a,b);
    if (!arr.includes(randomNumber)) {
      arr.push(randomNumber);
    }
  } while (arr.length < total);
  return arr;
};

const getElement = (arr,k) => arr[k];

const ArrOfValues = createUnique(1, PHOTO_COUNT);
let numb = -1;
const createComment = () => {
  numb+=1;
  return {
    id: getElement(ArrOfValues,numb),
    avatar: `img/avatar-${  randomiseValue(1,6)  }.svg`,
    message: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(NAMES),
  };
};

const SIMILAR_COMMENT = Array.from({length: PHOTO_COUNT}, createComment);

numb=-1;
let j = 25;
const createPhoto = () => {
  numb+=1;
  j-=1;
  createUnique(1,25);
  return {
    id: getElement(ArrOfValues,numb),
    url: `photos/${ getElement(ArrOfValues,j) }.jpg`,
    description: getRandomArrayElement(PHOTO_DESCRIPTION),
    likes: randomiseValue(15,200),
    comments: getRandomArrayElement(SIMILAR_COMMENT),
  };
};

const similarPhoto = Array.from({length: PHOTO_COUNT}, createPhoto);

for (let i = 0; i <= similarPhoto.length; i++) {
  getElement(similarPhoto,i);
}
import './data.js';
import './miniatures.js';
