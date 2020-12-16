/* 5- Implemente a função isManager:
- Testa se o id passado é de um gerente
*/

// function isManager(id) {}

const data = require('./data');

const isManager = id => data.employees
  .some((item) => item.managers.some((value) => value === id));

// Testes
console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

/* Resposta Esperada 
describe('isManager', () => {
  it('test', () => {
    let actual, expected;

    // testa se o id passado é de um gerente
    actual = zoo.isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');
    expected = false;
    assert.deepEqual(actual, expected);

    actual = zoo.isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83');
    expected = true;
    assert.deepEqual(actual, expected);
  });
});
*/