/* 12- Implemente a função increasePrices:
 - Ao passar uma porcentagem: 
    .incrementa todos os preços (arrendondados em duas casas decimais)
*/

// function increasePrices(percentage) {}

const data = require('./data');

const increasePrices = percentage => {
  Object.keys(data.prices)
  .forEach((key) => {
    data.prices[key] =
    Math.round(100 * ((data.prices[key] * (percentage / 100)) + data.prices[key])) / 100;

  })
}

// Testes
console.log(increasePrices(50));

console.log(increasePrices(30));

/* Resposta Esperada 
describe('increasePrices', () => {
  it('test', () => {
    let expected;

    // data uma porcentagem, incrementa todos os preços, arrendondados em duas casas
    // decimais
    zoo.increasePrices(50);
    expected = {
      'Adult': 74.99,
      'Senior': 37.49,
      'Child': 31.49
    };

    assert.deepEqual(data.prices, expected);

    zoo.increasePrices(30);
    expected = {
      'Adult': 97.49,
      'Senior': 48.74,
      'Child': 40.94
    };

    assert.deepEqual(data.prices, expected);
  });
});
*/