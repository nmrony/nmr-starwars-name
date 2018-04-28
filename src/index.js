import starWarsNames from './starwars-names.json';
import uniqueRandomArray from 'unique-random-array';

const getRandomItem = uniqueRandomArray(starWarsNames);

const random = number => {
  if (number === undefined) {
    return getRandomItem();
  }

  let randomItems = [];
  for (let counter = 0; counter < number; counter++) {
    randomItems.push(getRandomItem());
  }
  return randomItems;
};

export default {
  all: starWarsNames,
  random
};
