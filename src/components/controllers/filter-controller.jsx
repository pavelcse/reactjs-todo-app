import React from "react";
import PropTypes from "prop-types";
import {Button, ButtonGroup} from 'reactstrap';


const FilterController = ({handleFilter, selectedButton}) => (
    <ButtonGroup>
        <Button color={selectedButton === 'all' ? 'success' : 'secondary'} onClick={() => handleFilter('all')}> All </Button>
        <Button color={selectedButton === 'running' ? 'success' : 'secondary'} onClick={() => handleFilter('running')}> Running </Button>
        <Button color={selectedButton === 'completed' ? 'success' : 'secondary'} onClick={() => handleFilter('completed')}> Completed </Button>
    </ButtonGroup>
);

FilterController.propTypes = {
    handleFilter: PropTypes.func.isRequired,
    selectedButton: PropTypes.string.isRequired
};

export default FilterController;