import React, {Component} from 'react';

export default class TodoItem extends Component {
    render() {
        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-sm-1">
                        <input type="checkbox" />
                    </div>
                    <div className="col-sm-10">
                        {this.props.todo.title}
                    </div>
                    <div className="col-sm-1">
                        <button type="button" className="btn btn-danger btn-xs">x</button>
                    </div>
                </div>
            </li>
        )
    }
}