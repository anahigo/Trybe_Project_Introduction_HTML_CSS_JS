/* 10- Implemente a função schedule:
- Sem parâmetros, 
  .retorna um cronograma legível para humanos
- Se um único dia for passado, 
  .retorna somente este dia em um formato legível para humanos
*/

// function schedule(dayName) {}

const data = require('./data');

const openOrClose = ({ open, close }) => {
  if (open === 0 && close === 0) return 'CLOSED';
  return `Open from ${open}am until ${close - 12}pm`;
};

const schedule = dayName => {
  const date = data.hours;
    if (!dayName) {
    return Object.keys(date).reduce((newHours, keys) => {
      newHours[keys] = openOrClose(date[keys]);
      return newHours;
    }, {});
  }
  return { [dayName]: openOrClose(date[dayName]) };
}

// Testes
console.log(schedule());

console.log(schedule('Monday'));

console.log(schedule('Tuesday'));

/* Resposta Esperada 
describe('schedule', () => {
  it('test', () => {
    let actual, expected, options;

    // sem parâmetros, retorna um cronograma legível para humanos
    actual = zoo.schedule();
    expected = {
      'Tuesday': 'Open from 8am until 6pm',
      'Wednesday': 'Open from 8am until 6pm',
      'Thursday': 'Open from 10am until 8pm',
      'Friday': 'Open from 10am until 8pm',
      'Saturday': 'Open from 8am until 10pm',
      'Sunday': 'Open from 8am until 8pm',
      'Monday': 'CLOSED'
    };

    assert.deepEqual(actual, expected);

    // se um único dia for passado, retorna somente este dia em um formato
    // legível para humanos
    actual = zoo.schedule('Monday');
    expected = {
      'Monday': 'CLOSED'
    };

    assert.deepEqual(actual, expected);

    actual = zoo.schedule('Tuesday');
    expected = {
      'Tuesday': 'Open from 8am until 6pm'
    };

    assert.deepEqual(actual, expected);
  });
});
*/
