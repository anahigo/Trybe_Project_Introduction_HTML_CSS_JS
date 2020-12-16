const data = require('./data');

const sortArray = incommingArray =>
  incommingArray.sort((a, b) => ((a.age > b.age) ? -1 : 1))[0];

const getAnimals = animalsIds => animalsIds.map(id =>
  data.animals.find(animal => animal.id === id).name);

const openOrClose = ({ open, close }) => {
  if (open === 0 && close === 0) return 'CLOSED';
  return `Open from ${open}am until ${close - 12}pm`;
};

const createAnimalMapObj = () =>
  data.animals.reduce((obj, { name, location }) => {
    if (obj[location]) obj[location].push(name);
    else obj[location] = [name];
    return obj;
  }, {});

const animalMapIncludeNames = (animalMapObj, animalSex) => {
  let names = [];
  Object.keys(animalMapObj).forEach((location) => {
    animalMapObj[location].forEach((animName, index) => {
      const animObj = data.animals.find(({ name }) => name === animName);
      if (animalSex === undefined) {
        names = animObj.residents.map(({ name }) => name);
      } else {
        names = animObj.residents
          .filter(({ sex }) => sex === animalSex)
          .map(({ name }) => name);
      }
      animalMapObj[location][index] = { [animName]: names };
    });
  });
  return animalMapObj;
};

module.exports = { sortArray, getAnimals, openOrClose, createAnimalMapObj, animalMapIncludeNames };
