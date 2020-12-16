/* 8- Implemente a função entryCalculator:
- Retorna 0 
  .se nenhum argumento for passado
- Retorna 0 
  .se um objeto vazio for passado
- Retorna o preço total a ser cobrado 
  .dado o número de adultos, crianças e idosos
*/

// function entryCalculator(entrants) {}

const data = require('./data');

const entryCalculator = entrants => {
  if (entrants === undefined || !Object.keys(entrants).length) {
    return 0;
  }
  
  return Object.keys(entrants)
  .reduce((acc, chave) => acc + (entrants[chave] * data.prices[chave]), 0);
};

// Testes
console.log(entryCalculator());

console.log(entryCalculator({}));

const entrants = { 'Adult': 2, 'Child': 3, 'Senior': 1 };
console.log(entryCalculator(entrants));

/* Resposta Esperada 
describe('entryCalculator', () => {
  it('test', () => {
    let actual;

    // returna 0 se nenhum argumento for passado
    actual = zoo.entryCalculator();
    assert.equal(actual, 0);

    // retorna 0 se um objeto vazio for passado
    actual = zoo.entryCalculator({});
    assert.equal(actual, 0);

    // retorna o preço total a ser cobrado dado o número de adultos, crianças e
    // idosos
    const entrants = { 'Adult': 2, 'Child': 3, 'Senior': 1 };
    actual = zoo.entryCalculator(entrants);

    assert.equal(actual, 187.94);
  });
});
*/