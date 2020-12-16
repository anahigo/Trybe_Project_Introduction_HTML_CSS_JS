/* 2- Implemente a função animalsOlderThan:
- Ao passar o nome de uma espécie e uma idade, 
  .testar se todos os animais desta espécie possuem a idade mínima especificada
*/

// function animalsOlderThan(animal, age) {}

const data = require('./data');

const animalsOlderThan = (animal, age) =>
  data.animals.find(item => item.name === animal)
  .residents.every(item => item.age >= age);

// Testes
console.log(animalsOlderThan('otters', 7))

console.log(animalsOlderThan('penguins', 10))

/* Resposta Esperada 
describe('animalsOlderThan', () => {
  it('test', () => {
    let actual, expected;

    // passados o nome de uma espécie e uma idade, testa se todos os animais desta
    // espécie possuem a idade mínima especificada
    actual = zoo.animalsOlderThan('otters', 7);
    expected = true;

    assert.deepEqual(actual, expected);

    actual = zoo.animalsOlderThan('penguins', 10);
    expected = false;

    assert.deepEqual(actual, expected);
  });
});
*/