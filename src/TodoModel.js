export default class TodoModel {
    constructor() {
        this.STORE_KEY = 'todos';
        this.todos = localStorage.getItem(this.STORE_KEY) ? JSON.parse(localStorage.getItem(this.STORE_KEY)) : [];
        this.listeners = [];    // 注册监听器
    }

    // 订阅 on(type, listener)
    subscribe(listener) {
        this.listeners.push(listener);
    }

    emit() {
        this.listeners.forEach(listener => listener());
    }

    notify(todos) {
        localStorage.setItem(this.STORE_KEY, JSON.stringify(todos));
        this.todos = todos;
        this.emit();
    }

    addTodo = (todo) => {
        todo = Object.assign({}, {id: Math.random(), completed: false}, todo);
        let todos = this.todos;
        todos.push(todo);
        this.notify(todos);
    }

    toggle = (id) => {
        let todos = this.todos;
        todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.notify(todos);
    }

    remove = (id) => {
        let todos = this.todos;
        let index = todos.findIndex(todo => todo.id === id);
        todos.splice(index, 1);
        this.notify(todos);
    }

    toggleAll = (event) => {
        let checked = event.target.checked;
        let todos = this.todos;
        todos.map(todo => {
            todo.completed = checked;
            return todo;
        });
        this.notify(todos);
    }

    clearCompleted = () => {
        let todos = this.todos;
        todos = todos.filter(todo => !todo.completed);
        this.notify(todos);
    }
}