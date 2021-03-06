/* 1- Implemente a função animalsByIds:
- Caso receba nenhum parâmetro, necessário retornar um array vazio
- Ao receber como parâmetro um único id, retorna os animais com este id
- Ao receber mais de um id, retorna os animais que têm esses ids
*/

// function animalsByIds(ids) {}

const data = require('./data');

// function animalsByIds(ids) 
const animalsByIds = (...ids) => 
  ids.map(id => data.animals.find(animal => animal.id === id));

//Testes
console.log(animalsByIds());

console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

console.log(animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce','e8481c1d-42ea-4610-8e11-1752cfc05a46'));

/* Resposta Esperada 
describe('animalsByIds', () => {
  it('test', () => {
    let actual, expected;

    // sem parâmetros, retorna um array vazio
    actual = zoo.animalsByIds();
    expected = [];

    assert.deepEqual(actual, expected);

    // com um único id, retorna os animais com este id
    actual = zoo.animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce');
    expected = [{
      id: '0938aa23-f153-4937-9f88-4858b24d6bce',
      name: 'lions',
      popularity: 4,
      location: 'NE',
      residents: [
        { name: 'Zena', sex: 'female', age: 12 },
        { name: 'Maxwell', sex: 'male', age: 15 },
        { name: 'Faustino', sex: 'male', age: 7 },
        { name: 'Dee', sex: 'female', age: 14 }
      ]
    }];

    assert.deepEqual(actual, expected);

    // com mais de um id, retorna os animais que têm um desses ids
    actual = zoo.animalsByIds('0938aa23-f153-4937-9f88-4858b24d6bce',
      'e8481c1d-42ea-4610-8e11-1752cfc05a46');
    expected = [{
      id: '0938aa23-f153-4937-9f88-4858b24d6bce',
      name: 'lions',
      popularity: 4,
      location: 'NE',
      residents: [
        { name: 'Zena', sex: 'female', age: 12 },
        { name: 'Maxwell', sex: 'male', age: 15 },
        { name: 'Faustino', sex: 'male', age: 7 },
        { name: 'Dee', sex: 'female', age: 14 }
      ]
    }, {
      id: 'e8481c1d-42ea-4610-8e11-1752cfc05a46',
      name: 'tigers',
      popularity: 5,
      location: 'NW',
      residents: [
        { name: 'Shu', sex: 'female', age: 19 },
        { name: 'Esther', sex: 'female', age: 17 }
      ]
    }];

    assert.deepEqual(actual, expected);
  });
});
*/