/* 13- Implemente a função employeeCoverage:
- Sem parâmetros:
  .retorna uma lista de funcionários e os animais pelos quais são responsáveis
- Com o id de um funcionário,
  .retorna os animais pelos quais o funcionário é responsável
- Com o primeiro nome de um funcionário,
  .retorna os animais pelos quais o funcionário é responsável
- Com o último nome de um funcionário,
  .retorna os animais pelos quais o funcionário é responsável
*/

// function employeeCoverage(idOrName) {}

const data = require('./data');

const getAnimals = animalsIds => animalsIds.map((id) => data.animals.find(animal => animal.id === id).name)

const employeeCoverage = idOrName => {

  const employees = {};

  if(!idOrName) {
    data.employees.forEach(employee => (employees[`${employee.firstName} ${employee.lastName}`] = getAnimals(employee.responsibleFor)))
  } else {
    const employee = data.employees.find(item => item.id === idOrName || item.firstName === idOrName || item.lastName === idOrName);
    employees[`${employee.firstName} ${employee.lastName}`] = getAnimals(employee.responsibleFor)
  }
  
  return employees;
}

// Testes
console.log(employeeCoverage())

console.log(employeeCoverage('4b40a139-d4dc-4f09-822d-ec25e819a5ad'))

console.log(employeeCoverage('Stephanie'))

console.log(employeeCoverage('Azevado'))

/* Resposta Esperada 
describe('employeeCoverage', () => {
  it('test', () => {
    let actual, expected;

    // sem parâmetros, retorna uma lista de funcionários e os animais pelos quais
    // eles são responsáveis
    actual = zoo.employeeCoverage();
    expected = {
      'Nigel Nelson': ['lions', 'tigers'],
      'Burl Bethea': ['lions', 'tigers', 'bears', 'penguins'],
      'Ola Orloff': ['otters', 'frogs', 'snakes', 'elephants'],
      'Wilburn Wishart': ['snakes', 'elephants'],
      'Stephanie Strauss': ['giraffes', 'otters'],
      'Sharonda Spry': ['otters', 'frogs'],
      'Ardith Azevado': ['tigers', 'bears'],
      'Emery Elser': ['elephants', 'bears', 'lions']
    };

    assert.deepEqual(actual, expected);

    // com o id de um funcionário, retorna os animais pelos quais o funcionário é
    // responsável
    actual = zoo.employeeCoverage('4b40a139-d4dc-4f09-822d-ec25e819a5ad');
    expected = { 'Sharonda Spry': ['otters', 'frogs'] };
    assert.deepEqual(actual, expected);

    // com o primeiro nome de um funcionário, retorna os animais pelos quais o
    // funcionário é responsável
    actual = zoo.employeeCoverage('Stephanie');
    expected = { 'Stephanie Strauss': ['giraffes', 'otters'] };

    assert.deepEqual(actual, expected);

    // com o último nome de um um funcionário, retorna os animais pelos quais o
    // funcionário é responsável
    actual = zoo.employeeCoverage('Azevado');
    expected = { 'Ardith Azevado': ['tigers', 'bears'] };

    assert.deepEqual(actual, expected);
  });
});
*/
