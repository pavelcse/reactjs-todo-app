import React, {Component} from "react";
import PropTypes from "prop-types";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import ListView from "../list-view";

class CreateTodoForm extends Component {

    state = {
        text: '',
        description: ''
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.createTodo(this.state);

        event.target.reset();
        this.setState({text: '', description: ''})
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>Enter Task</Label>
                    <Input
                        placeholder='Type Todo'
                        name='text'
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Enter Task</Label>
                    <Input
                        type='textarea'
                        placeholder='Type Description'
                        name='description'
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                </FormGroup>

                <Button type='submit'>Create Task</Button>
            </Form>
        );
    }
}

CreateTodoForm.propTypes = {
    createTodo: PropTypes.func.isRequired
};

export default CreateTodoForm;