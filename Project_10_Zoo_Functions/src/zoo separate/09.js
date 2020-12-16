/* 9- Implemente a função animalMap:
- Sem parâmetros:
  .retorna animais categorizados por localização
- Com opções especificadas, 
  .retorna nomes de animais
- Com opções especificadas, 
  .retorna nomes de animais ordenados
- Com opções especificadas, 
  .retorna somente nomes de animais macho/fêmea
- Só retorna informações específicas de gênero se `includeNames` for setado
*/

// function animalMap(options) {}

const data = require('./data');

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

const animalMap = options => {
  let animalMapObj = createAnimalMapObj();
  if (options === undefined) return animalMapObj;
  const { includeNames, sex, sorted } = options;
  if (includeNames) animalMapObj = animalMapIncludeNames(animalMapObj, sex);
  if (sorted) {
    Object.keys(animalMapObj).forEach((location) => {
      animalMapObj[location].forEach((animNamesObj, index) => {
        animNamesObj[Object.keys(animNamesObj)[0]].sort();
      });
    });
  }
  return animalMapObj;
}

// Testes
console.log(animalMap());

const options01 = { includeNames: true }
console.log(animalMap(options01));

const options02 = { includeNames: true, sorted: true }
console.log(animalMap(options02));

const options03 = { includeNames: true, sex: 'female' }
console.log(animalMap(options03));

const options04 = { sex: 'female' }
console.log(animalMap(options04));

/* Resposta Esperada 
describe('animalMap', () => {
  it('test', () => {
    let actual, expected, options;

    // sem parâmetros, retorna animais categorizados por localização
    actual = zoo.animalMap();
    expected = {
      NE: ['lions', 'giraffes'],
      NW: ['tigers', 'bears', 'elephants'],
      SE: ['penguins', 'otters'],
      SW: ['frogs', 'snakes']
    };

    assert.deepEqual(actual, expected);

    // com opções especificadas, retorna nomes de animais
    options = { includeNames: true }
    actual = zoo.animalMap(options);
    expected = {
      NE: [
        { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
        { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] }
      ],
      NW: [
        { tigers: ['Shu', 'Esther'] },
        { bears: ['Hiram', 'Edwardo', 'Milan'] },
        { elephants: ['Ilana', 'Orval', 'Bea', 'Jefferson'] }
      ],
      SE: [
        { penguins: ['Joe', 'Tad', 'Keri', 'Nicholas'] },
        { otters: ['Neville', 'Lloyd', 'Mercedes', 'Margherita'] }
      ],
      SW: [
        { frogs: ['Cathey', 'Annice'] },
        { snakes: ['Paulette', 'Bill'] }
      ]
    };

    assert.deepEqual(actual, expected);

    // com opções especificadas, retorna nomes de animais ordenados
    options = { includeNames: true, sorted: true }
    actual = zoo.animalMap(options);
    expected = {
      NE: [
        { lions: ['Dee', 'Faustino', 'Maxwell', 'Zena'] },
        { giraffes: ['Antone', 'Arron', 'Bernard', 'Clay', 'Gracia', 'Vicky'] }
      ],
      NW: [
        { tigers: ['Esther', 'Shu'] },
        { bears: ['Edwardo', 'Hiram', 'Milan'] },
        { elephants: ['Bea', 'Ilana', 'Jefferson', 'Orval'] }
      ],
      SE: [
        { penguins: ['Joe', 'Keri', 'Nicholas', 'Tad'] },
        { otters: ['Lloyd', 'Margherita', 'Mercedes', 'Neville'] }
      ],
      SW: [
        { frogs: ['Annice', 'Cathey'] }, { snakes: ['Bill', 'Paulette'] }
      ]
    };

    assert.deepEqual(actual, expected);

    // com opções especificadas, retorna somente nomes de animais macho/fêmea
    options = { includeNames: true, sex: 'female' }
    actual = zoo.animalMap(options);
    expected = {
      NE: [
        { lions: ['Zena', 'Dee'] },
        { giraffes: ['Gracia', 'Vicky'] }
      ],
      NW: [
        { tigers: ['Shu', 'Esther'] },
        { bears: [] },
        { elephants: ['Ilana', 'Bea'] }
      ],
      SE: [
        { penguins: ['Keri'] },
        { otters: ['Mercedes', 'Margherita'] }
      ],
      SW: [
        { frogs: ['Cathey', 'Annice'] },
        { snakes: ['Paulette'] }
      ]
    };

    assert.deepEqual(actual, expected);

    // só retorna informações específicas de gênero se includeNames for setado
    options = { sex: 'female' }
    actual = zoo.animalMap(options)['NE'][0];
    expected = 'lions';

    assert.equal(actual, expected);
  });
});
*/
