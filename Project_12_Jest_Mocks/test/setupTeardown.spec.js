const adventure = require('../src/setupTeardown');

/*
Num universo não tão distante, um grupo de aventureiros da Trybe enfrentam uma série de testes.
O grupo parte em direção ao sucesso, mas,
devido a ameaça de criaturas temíveis, o grupo não chegará inteiro ao fim.
Após cada aventura um de nossos aventureiros cairá.
Cada um dos testes abaixo verifica a quantidade de aventureiros após cada iteração.
Sua missão aqui é:

  - Use a função randomAttack do objeto adventure
  que remove um dos aventureiros toda vez que é chamada,
  ela deve funcionar entre cada teste.
  Opcional:
  - Para ficar mais visível, imprima na tela após cada teste o grupo de aventureiros restante.
  - No fim dos testes, imprima uma mensagem com o nome do aventureiro que sobreviveu.

PS: Os codinomes dos aventureiros são reais! Tentem descobrir quem é quem!

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('quem sobreviveu?', () => {
  //  Adicione seu código aqui
  //  Use a função randomAttack do objeto adventure
  //  que remove um dos aventureiros toda vez que é chamada,
  //  ela deve funcionar entre cada teste.
  beforeEach(() => adventure.randomAttack());
  //  imprima na tela após cada teste o grupo de aventureiros restante.
  afterEach(() => console.log('Boa sorte', adventure.specialists));
  //  No fim dos testes, imprima uma mensagem com o nome do aventureiro que sobreviveu.
  afterAll(() => console.log(`${adventure.specialists[0].nome} sobreviveu!!`))

  test('depois da primeira aventura', () => {
    expect(adventure.specialists.length).toBe(5);
  });
  test('depois da segunda aventura', () => {
    expect(adventure.specialists.length).toBe(4);
  });
  test('depois da terceira aventura', () => {
    expect(adventure.specialists.length).toBe(3);
  });
  test('depois da quarta aventura', () => {
    expect(adventure.specialists.length).toBe(2);
  });
  test('depois da quinta aventura', () => {
    expect(adventure.specialists.length).toBe(1);
  });
});

/*
Resposta Esperada
const specialists = [{ nome: 'Tunico', classe: 'Mestre dos Magos' },
                  { nome: 'Cremoso', classe: 'Cavaleiro Negro' },
                  { nome: 'Gordinho', classe: 'Pirata' },
                  { nome: 'Lobo Solitário', classe: 'Samurai' },
                  { nome: 'Ousado', classe: 'Mago' },
                  { nome: 'Anjo Loiro', classe: 'Clérigo' }];

const enemies = [{ nome: 'Barata', ataque: 'Voado' },
                { nome: 'Esquilo', ataque: 'Mordido' },
                { nome: 'Pé da mesa', ataque: 'Tropicado' },
                { nome: 'Dragão', ataque: 'Soprado' }];

const randomAttack = () => {
  const randomMonster = enemies[Math.floor(Math.random() * 4)];
  const randomSpecialistIndex = Math.floor(Math.random() * specialists.length);
  const randomSpecialist = specialists[randomSpecialistIndex];
  console.log(`${randomSpecialist.nome}, the ${randomSpecialist.classe} has been ${randomMonster.ataque} by a ${randomMonster.nome}`);
  console.log(`Rest in peace, ${randomSpecialist.nome}...`);
  specialists.splice(randomSpecialistIndex, 1);
};

module.exports = { specialists, randomAttack };
*/