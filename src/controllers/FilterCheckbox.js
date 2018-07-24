import React, {Component} from 'react';
import '../css/FilterCheckbox.css';

class FilterCheckbox extends Component {
    render() {
        return (
            <div className="checkbox">
                <div className="checkbox__input" id="activeCheckboxContainer">
                    <input type="checkbox" id="activeCheckbox"></input>
                </div>
                <div className="checkbox__label">Show active</div>
            </div>  
        );
    }
}

export default FilterCheckbox;