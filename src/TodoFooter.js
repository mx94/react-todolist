import React from 'react';
import * as FilterTypes from './filter-types';

export default class TodoFooter extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-3 text-left">
                    {
                        this.props.activeTodoCount > 0 && <span className="badge" style={{backgroundColor: 'deepSkyBlue'}} >你还有 {this.props.activeTodoCount} 件待办事项</span>
                    }
                </div>
                <div className="col-sm-6 text-center">
                    <button
                        className={`btn btn-xs ${this.props.filterType===FilterTypes.ALL?'btn-success':'btn-default'}`}
                        style={{marginLeft: 10}}
                        onClick={()=>this.props.changeFilterType(FilterTypes.ALL)}
                    >全部</button>
                    <button
                        className={`btn btn-xs ${this.props.filterType===FilterTypes.ACTIVE?'btn-success':'btn-default'}`}
                        style={{marginLeft: 10}}
                        onClick={()=>this.props.changeFilterType(FilterTypes.ACTIVE)}
                    >未完成</button>
                    <button
                        className={`btn btn-xs ${this.props.filterType===FilterTypes.COMPLETED?'btn-success':'btn-default'}`}
                        style={{marginLeft: 10}}
                        onClick={()=>this.props.changeFilterType(FilterTypes.COMPLETED)}
                    >已完成</button>
                </div>
                <div className="col-sm-3 text-center">
                    {
                        this.props.completedTodoCount>0 ? <button className="btn btn-danger btn-xs" onClick={this.props.clearCompleted}>删除已完成</button> : null
                    }
                </div>
            </div>
        )
    }
}