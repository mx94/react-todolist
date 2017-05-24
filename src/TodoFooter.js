import React from 'react'

export default class TodoFooter extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-3 text-center">
                    <span className="badge" style={{backgroundColor: 'deepSkyBlue'}} >你还有 {this.props.activeTodoCount} 件待办事项</span>
                </div>
                <div className="col-sm-6 text-center">
                    <button className="btn btn-default btn-xs" style={{marginLeft: 10}}>全部</button>
                    <button className="btn btn-default btn-xs" style={{marginLeft: 10}}>未完成</button>
                    <button className="btn btn-default btn-xs" style={{marginLeft: 10}}>已完成</button>
                </div>
                <div className="col-sm-3 text-center"></div>
            </div>
        )
    }
}