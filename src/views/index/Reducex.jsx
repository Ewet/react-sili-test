import React, { Component } from 'react';
import { connect } from 'react-redux'
class Redux extends Component {
    render() {
        return (
            <div>
                <input type='text' ref={e => {this.todoVal = e}} />
                <button onClick={ () => this.props.addTodo(this.todoVal.value)}>ADD TODO</button>
                <ul>
                    {this.props.listData.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listData: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: function(todoValue) {
            dispatch({
                type: 'ADD_TODO',
                payload: todoValue
            })
        }
    }
}

const TodoList = connect(mapStateToProps, mapDispatchToProps)(Redux);

export default TodoList;
