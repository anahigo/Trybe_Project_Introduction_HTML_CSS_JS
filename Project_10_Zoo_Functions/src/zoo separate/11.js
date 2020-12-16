/* 11- Implemente a função oldestFromFirstSpecies:
- Passado o id de um funcionário:
  .encontra a primeira espécie de animal gerenciado pelo funcionário,
- Retornar um array as informações (nome, sexo e idade) do animal mais velho dessa espécie
*/

// function oldestFromFirstSpecies(id) {}

const data = require('./data');

const sortArray = incommingArray =>
  incommingArray.sort((a, b) => ((a.age > b.age) ? -1 : 1))[0];

const oldestFromFirstSpecies = id => {
  const firstSpecie = data.employees.find(item => item.id === id).responsibleFor[0];
  
  const animals = data.animals.find(item => item.id === firstSpecie);

  const oldestAnimal = sortArray(animals.residents);
  
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age]
};

// Testes
console.log(oldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

console.log(oldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

/* Resposta Esperada 
describe('oldestFromFirstSpecies', () => {
  it('test', () => {
    let actual, expected;

    // passado o id de um funcionário, encontra a primeira espécie de animal
    // gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do
    // animal mais velho dessa espécie
    actual = zoo.oldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992');
    expected = ['Vicky', 'female', 12];

    assert.deepEqual(actual, expected);

    actual = zoo.oldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad');
    expected = ['Margherita', 'female', 10];

    assert.deepEqual(actual, expected);
  });
});

*/