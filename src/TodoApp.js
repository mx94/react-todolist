import React, {Component} from 'react';
import TodoHeader from "./TodoHeader";
import TodoItem from "./TodoItem";
import TodoFooter from "./TodoFooter";
import * as FilterTypes from './filter-types';
require('bootstrap/dist/css/bootstrap.css');

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterType: FilterTypes.ALL
        };
    }

    clearCompleted = () => {
        let todos = this.state.todos;
        todos = todos.filter(todo => !todo.completed);
        this.setState({todos});
    }

    changeFilterType = (filterType) => {
        this.setState({filterType});
    }

    toggleAll = (event) => {
        let checked = event.target.checked;
        let todos = this.state.todos;
        todos.map(todo => {
            todo.completed = checked;
            return todo;
        });
        this.setState({todos});
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

    render() {
        let todos = this.props.model.todos;
        let activeTodoCount = todos.reduce((count, todo) => count + (todo.completed ? 0 : 1), 0);
        let completedTodoCount = todos.length - activeTodoCount;
        let showTodos = todos.filter(todo => {
            switch (this.state.filterType) {
                case FilterTypes.ACTIVE:
                    return !todo.completed;
                case FilterTypes.COMPLETED:
                    return todo.completed;
                default:
                    return true;
            }
        });
        let main = (
            <ul className="list-group">
                {
                    showTodos.length > 0 ?
                        <li className="list-group-item">
                            <input
                                type="checkbox"
                                checked={activeTodoCount === 0}
                                onChange={this.toggleAll}
                            />
                            <span>{activeTodoCount === 0 ? ' 全部取消' : ' 全部选中'}</span>
                        </li> : null
                }
                {
                    showTodos.map((todo, index) => <TodoItem key={index} todo={todo} toggle={this.toggle}
                                                             remove={this.remove}/>)
                }
            </ul>
        );
        return (
            <div className="container" style={{marginTop: 30}}>
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <TodoHeader addTodo={this.props.model.addTodo}/>
                            </div>
                            <div className="panel-body">
                                {main}
                            </div>
                            <div className="panel-footer">
                                <TodoFooter
                                    activeTodoCount={activeTodoCount}
                                    changeFilterType={this.changeFilterType}
                                    filterType={this.state.filterType}
                                    clearCompleted={this.clearCompleted}
                                    completedTodoCount={completedTodoCount}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoApp;
