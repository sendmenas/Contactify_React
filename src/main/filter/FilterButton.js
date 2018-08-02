import React, {Component} from 'react';
import './FilterButton.css';

class FilterButton extends Component {
    render() {
        return (
            <div 
                onClick={() => this.props.manageFilter()}
                className="filter-button"
            >
                {this.props.value}
            </div>
        );
    }
}

export default FilterButton;