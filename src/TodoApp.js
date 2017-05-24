import React, {Component} from 'react';
import TodoHeader from "./TodoHeader";
import TodoItem from "./TodoItem";
require('bootstrap/dist/css/bootstrap.css');

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: Math.random(),
                    title: '回家洗澡吃饭睡觉打豆豆',
                    completed: false
                },
                {
                    id: Math.random(),
                    title: '教练我要打篮球',
                    completed: true
                }
            ]
        };
    }

    remove = (id) => {
        let todos = this.state.todos;
        let index = todos.findIndex(todo => todo.id === id);
        todos.splice(index, 1);
        this.setState({todos});
    }

    toggle = (id) => {
        let todos = this.state.todos;
        todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({todos});
    }

    addTodo = (todo) => {
        todo = Object.assign({}, {id: Math.random(), completed: false}, todo);
        let todos = this.state.todos;
        todos.push(todo);
        this.setState({todos});
    }

    render() {
        let main = (
            <ul className="list-group">
                {
                    this.state.todos.map((todo, index) => <TodoItem key={index} todo={todo} toggle={this.toggle} remove={this.remove} />)
                }
            </ul>
        );
        return (
            <div className="container" style={{marginTop: 30}}>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <TodoHeader addTodo={this.addTodo} />
                            </div>
                            <div className="panel-body">
                                {main}
                            </div>
                            <div className="panel-footer"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoApp;
