import React, {Component} from 'react';
import '../css/FilterCheckbox.css';

class FilterCheckbox extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const checkBoxClass = this.props.active === false ?  "checkbox__input" : "checkbox__input checkbox__input--checked";

        return (
            <div className="checkbox">
                <div className={checkBoxClass}>
                    <input type="checkbox"></input>
                </div>
                <div className="checkbox__label">Show active</div>
            </div>  
        );
    }
}

export default FilterCheckbox;