import React, {Component} from 'react';
const ENTER_KEY = 13;

export default class TodoHeader extends Component {
    handleKeyDown = (event) => {
        if (event.keyCode === ENTER_KEY) {
            let title = event.target.value;
            this.props.addTodo({title});
            event.target.value = '';
        }
    }

    render() {
        return (
            <input
                type="text"
                className="form-control"
                autoFocus={true}
                onKeyDown={this.handleKeyDown} />
        )
    }
}