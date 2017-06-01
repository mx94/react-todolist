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

    changeFilterType = (filterType) => {
        this.setState({filterType});
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
                    showTodos.length > 0 &&
                        <li className="list-group-item">
                            <input
                                type="checkbox"
                                checked={activeTodoCount === 0}
                                onChange={this.props.model.toggleAll}
                            />
                            <span>{activeTodoCount === 0 ? ' 全部取消' : ' 全部选中'}</span>
                        </li>
                }
                {
                    showTodos.map((todo, index) => <TodoItem key={index} todo={todo} toggle={this.props.model.toggle}
                                                             remove={this.props.model.remove}/>)
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
                                    clearCompleted={this.props.model.clearCompleted}
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
