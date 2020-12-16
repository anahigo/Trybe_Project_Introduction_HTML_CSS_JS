// Buttons and List
const del = this.document.getElementById('excluir');
const moveUp = this.document.getElementById('mover-cima');
const moveDown = this.document.getElementById('mover-baixo');
const delFinished = this.document.getElementById('remover-finalizados');
const clear = this.document.getElementById('apaga-tudo');
const store = this.document.getElementById('salvar-tarefas');
const addTask = this.document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const toDo = document.getElementById('texto-tarefa');

//Local Storage
if (typeof Storage !== '') {
  list.innerHTML = localStorage.list;
}

// Black Button criar-tarefa / addTask
addTask.addEventListener('click', () => {
  const task = document.createElement('li');
  task.innerHTML = toDo.value;
  list.appendChild(task);
  toDo.value = null;
});

// Selecting an item
list.addEventListener('click', (item) => {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').style.backgroundColor = 'white';
    document.querySelector('.selected').classList.remove('selected');
  }
  item.target.style.backgroundColor = 'gainsboro';
  item.target.classList.add('selected');
});

// Selecting an item made
list.addEventListener('dblclick', (item) => {
  if (item.target.classList.contains('completed')) {
    item.target.classList.remove('completed');
  } else {
    item.target.classList.add('completed');
  }
  item.target.style.textDecoration = 'line-through';
});

// Red Button excluir / del 
del.addEventListener('click', () => {
  const toRemove = document.querySelector('.selected');
  list.removeChild(toRemove);
});

// Orange Button mover-cima / moveUp
moveUp.addEventListener('click', () => {
  const selectedTask = document.querySelector('.selected');
  const TaskUp = selectedTask.innerHTML;
  const TaskDown = selectedTask.previousElementSibling.innerHTML;
  selectedTask.previousElementSibling.innerHTML = TaskUp;
  selectedTask.previousElementSibling.className = 'selected';
  selectedTask.previousElementSibling.style.backgroundColor = 'gainsboro';
  selectedTask.innerHTML = TaskDown;
  selectedTask.classList.remove('selected');
  selectedTask.style.backgroundColor = 'white';
});

// Orange Button mover-baixo / moveDown
moveDown.addEventListener('click', () => {
  const selectedTask = document.querySelector('.selected');
  const TaskDown = selectedTask.innerHTML;
  const TaskUp = selectedTask.nextElementSibling.innerHTML;
  selectedTask.nextElementSibling.innerHTML = TaskDown;
  selectedTask.nextElementSibling.className = 'selected';
  selectedTask.nextElementSibling.style.backgroundColor = 'gainsboro';
  selectedTask.innerHTML = TaskUp;
  selectedTask.classList.remove('selected');
  selectedTask.style.backgroundColor = 'white';
});

// Gray Button remover-finalizados / delFinished
delFinished.addEventListener('click', () => {
  const task = document.querySelectorAll('li');
  for (let i = 0; i < task.length; i++) {
    if (task[i].classList.contains('completed')) {
      list.removeChild(task[i]);
    }
  }
});

// Red Button apaga-tudo / clear
clear.addEventListener('click', () => {
  const task = document.querySelectorAll('li');
  for (let i = 0; i < task.length; i++) {
    list.removeChild(task[i]);
  }
});

// Green Button salvar-tarefas / store
store.addEventListener('click', () => {
  localStorage.list = document.getElementById('lista-tarefas').innerHTML;
});
