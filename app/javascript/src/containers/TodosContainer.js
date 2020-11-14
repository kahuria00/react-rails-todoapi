import React, { Component} from 'react';
import axios from 'axios';
import {connent} from 'react-redux';
import {loadTodos, addTodo,toggleTodo,deleteTodo} from '../actions/actionCreators'


class TodosContainer extends Component{
    
    getTodos(){
        axios.get('/api/v1/todos')
        .then (response =>
            this.props.dispatch(loadTodos))
    }
}