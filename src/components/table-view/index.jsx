import React from "react";
import {Button, CustomInput, Table} from 'reactstrap';
import PropTypes from "prop-types";

// Start ------ Helper Component: Row Item Component
const RowItem = ({todo, toggleSelect, toggleComplete}) => (
    <tr>
        <td>
            <CustomInput
                id={todo.id}
                type='checkbox'
                checked={todo.isSelect}
                onChange={() => toggleSelect(todo.id)}
            />
        </td>
        <td>{todo.text}</td>
        <td>{todo.time.toDateString()}</td>
        <td>
            <Button
                className='ml-auto'
                color={todo.isComplete ? 'danger' : 'success'}
                onClick={() => toggleComplete(todo.id)}
            >
                {todo.isComplete ? 'Completed' : 'Running'}
            </Button>
        </td>
    </tr>
);

RowItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
};
// End ------ Helper Component: Row Item Component

// Start ------ Main Component: Table View Component
const TableView = ({todos, toggleSelect, toggleComplete}) => (
    <Table>
        <thead>
        <tr>
            <th scope='row'>#</th>
            <th scope='row'>Todo</th>
            <th scope='row'>Time</th>
            <th scope='row'>Action</th>
        </tr>
        </thead>
        <tbody>
        {todos.map(todo => (
            <RowItem
                key={todo.id}
                todo={todo}
                toggleComplete={toggleComplete}
                toggleSelect={toggleSelect}
            />
        ))}
        </tbody>
    </Table>
);

TableView.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
};

export default TableView;
// End ------ Main Component: Table View Component