/*7- Implemente a função animalCount:
- Sem parâmetros,
  .retorna animais e suas quantidades
- Com o nome de uma espécie de animal, 
  .retorna somente a quantidade
*/

// function animalCount(species) {}

const data = require('./data');

const animalCount = species => {
  if (species)
    return data.animals.find(item => item.name === species).residents.length;

  const animals = {};

  data.animals.map(item => {
    animals[item.name] = item.residents.length;
    return animals;
  });

  return animals;
};

// Testes
console.log(animalCount());

console.log(animalCount('lions'));

console.log(animalCount('snakes'));

/* Resposta Esperada 
describe('animalCount', () => {
  it('test', () => {
    let actual, expected;

    // sem parâmetros, retorna animais e suas quantidades
    actual = zoo.animalCount();
    expected = {
      'lions': 4,
      'tigers': 2,
      'bears': 3,
      'penguins': 4,
      'otters': 4,
      'frogs': 2,
      'snakes': 2,
      'elephants': 4,
      'giraffes': 6
    };

    assert.deepEqual(actual, expected);

    // com o nome de uma espécie de animal, retorna somente a quantidade
    actual = zoo.animalCount('lions');
    expected = 4;

    assert.deepEqual(actual, expected);

    actual = zoo.animalCount('snakes');
    expected = 2;

    assert.deepEqual(actual, expected);
  });
});
*/
