import React, {Component} from 'react';
import '../css/FilterButton.css';

class FilterButton extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="filter-button">{this.props.value}</div>
        );
    }
}

export default FilterButton;