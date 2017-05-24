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

    addTodo = (todo) => {
        todo = Object.assign({}, {id: Math.random(), completed: false}, todo);
        let todos = this.todos;
        todos.push(todo);
        localStorage.setItem(this.STORE_KEY, JSON.stringify(todos));
        this.emit();
    }
}