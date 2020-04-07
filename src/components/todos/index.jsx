import React, {Component} from "react";
import shortid from 'shortid';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

import ListView from "../list-view";
import TableView from "../table-view";
import Controller from "../controllers";
import CreateTodoForm from "../todo-form";


class Todos extends Component {

    state = {
        todos: [
            {
                id: 'a1',
                text: 'First Todo',
                description: 'Simple Description',
                time: new Date(),
                isComplete: false,
                isSelect: false
            },
            {
                id: 'a2',
                text: 'Second Todo',
                description: 'Medium Description',
                time: new Date(),
                isComplete: false,
                isSelect: false
            }
        ],
        isOpenTodoForm: false,
        searchTerm: '',
        view: 'list',
        filterValue: 'all'
    };

    toggleSelect = todoId => {
        const todos = [...this.state.todos];
        const todo = todos.find(t => t.id === todoId);
        todo.isSelect = !todo.isSelect;
        this.setState({ todos });
    };

    toggleComplete = (todoId) => {
        const todos = [...this.state.todos];
        const todo = todos.find(t => t.id === todoId);
        todo.isComplete = !todo.isComplete;
        this.setState({ todos });
    };

    handleSearch = value => {
        this.setState({searchTerm: value});
    };

    toggleForm = () => {
        this.setState({isOpenTodoForm: !this.state.isOpenTodoForm})
    };

    handleFilter = filter => {
        this.setState({filterValue: filter});
    };

    clearCompleted = () => {
        const todos = this.state.todos.filter(todo => !todo.isComplete);
        this.setState({todos})
    };

    clearSelected = () => {
        const todos = this.state.todos.filter(todo => !todo.isSelect);
        this.setState({todos})
    };

    reset = () => {
        this.setState({
            isOpenTodoForm: false,
            searchTerm: '',
            view: 'list',
            filterValue: 'all'
        });
    };

    changeView = event => {
        this.setState({view: event.target.value});
    };

    createTodo = todo => {
        todo.id = shortid.generate();
        todo.time = new Date();
        todo.isComplete = false;
        todo.isSelect = false;

        const todos = [todo, ...this.state.todos];
        this.setState({todos});
        this.toggleForm();
    };

    performSearch = () => {
        return this.state.todos.filter(todo =>
            todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        );
    };

    performFilter = todos => {
        const {filterValue} = this.state;
        if(filterValue === 'completed') {
            return todos.filter(todo => todo.isComplete);
        } else if(filterValue === 'running') {
            return todos.filter(todo => !todo.isComplete);
        } else {
            return todos;
        }
    };

    getView = () => {
        let todos = this.performSearch();
        todos = this.performFilter(todos);
        return this.state.view === 'list' ? (
            <ListView
                todos={todos}
                toggleSelect={this.toggleSelect}
                toggleComplete={this.toggleComplete}
            />
        ) : (
            <TableView
                todos={todos}
                toggleSelect={this.toggleSelect}
                toggleComplete={this.toggleComplete}
            />
        );
    };

    render() {
        return (
            <div>
                <h1 className='display-4 text-center mb-5'>Stack Todos</h1>

                <Controller
                    term={this.state.searchTerm}
                    toggleForm={this.toggleForm}
                    handleSearch={this.handleSearch}
                    handleFilter={this.handleFilter}
                    clearCompleted={this.clearCompleted}
                    clearSelected={this.clearSelected}
                    reset={this.reset}
                    view={this.state.view}
                    changeView={this.changeView}
                    selectedButton={this.state.filterValue}
                />

                <div>
                    {this.getView()}
                </div>

                <Modal
                    isOpen={this.state.isOpenTodoForm}
                    toggle={this.toggleForm}
                >
                    <ModalHeader toggle={this.toggleForm}>
                        Create New Todo Item
                    </ModalHeader>
                    <ModalBody>
                        <CreateTodoForm createTodo={this.createTodo} />
                    </ModalBody>
                    
                </Modal>
            </div>
        );
    }
}

export default Todos;