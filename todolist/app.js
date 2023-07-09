'use strict';

let banco = [
    {'tarefa': 'Estudar JS', 'status': ''},
    {'tarefa': 'netflix', 'status': 'checked'},
    {'tarefa': 'teste1', 'status': 'checked'}
];

const criarItem = (tarefa, status) => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
    <input type="checkbox" ${status}>
    <div>${tarefa}</div>
    <input type="button" value="x">
    `
    document.getElementById('todoList').appendChild(item);
}

const limparTarefas = () => {
    const todoList = document.getElementById('todoList');
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
}

const atualizarTela = () => {
    limparTarefas();
    banco.forEach (item => criarItem (item.tarefa, item.status));
}

atualizarTela();
atualizarTela();

/* Anotações: Até aqui foi criada 3 funções: 
-criar itens
-limpar as tarefas
-atualizar a tela

cada um com sua variável!
 */