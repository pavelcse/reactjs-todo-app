import React from "react";
import { ListGroup, ListGroupItem, CustomInput, Button} from 'reactstrap';
import PropTypes from 'prop-types';

// Start ------ Helper Component: List Item Component
const ListItem = ({todo, toggleSelect, toggleComplete}) => {
    return (
        <ListGroupItem className='d-flex align-items-center'>
            <CustomInput
                id={todo.id}
                type='checkbox'
                checked={todo.isSelect}
                onChange={() => toggleSelect(todo.id)}
            />

            <div className='mx-3'>
                <h4>{todo.text}</h4>
                <p>{todo.time.toDateString()}</p>
            </div>
            <Button
                className='ml-auto'
                color={todo.isComplete ? 'danger' : 'success'}
                onClick={() => toggleComplete(todo.id)}
            >
                {todo.isComplete ? 'Completed' : 'Running'}
            </Button>

        </ListGroupItem>
    )
};

ListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
};

// End ------ Helper Component: List Item Component

// Start ------ Main Component: List View Component
const ListView = ({todos, toggleSelect, toggleComplete}) => {
    return (
        <ListGroup>
            {todos.map(todo => (
                <ListItem
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    toggleSelect={toggleSelect}
                />
            ))}

        </ListGroup>
    )
};

ListView.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired,
};

export default ListView;
// End ------ Main Component: List View Component