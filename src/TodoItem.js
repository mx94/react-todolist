import React, {Component} from 'react';

export default class TodoItem extends Component {
    render() {
        let todo = this.props.todo;
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-sm-1">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={()=>this.props.toggle(todo.id)}
                        />
                    </div>
                    <div className="col-sm-10" style={{textDecoration: todo.completed ? 'line-through' : ''}}>
                        {this.props.todo.title}
                    </div>
                    <div className="col-sm-1">
                        <button
                            type="button"
                            className="btn btn-danger btn-xs"
                            onClick={()=>this.props.remove(todo.id)}
                        >x</button>
                    </div>
                </div>
            </li>
        )
    }
}