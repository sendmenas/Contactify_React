import React, {Component} from 'react';
import '../css/FilterInput.css';

class FilterInput extends Component {
    render() {
        return (
            <div className="filter-name">
                <input className="filter-input" placeholder="Name" type="text" id="nameFilter"></input>
            </div>
        );
    }
}

export default FilterInput;