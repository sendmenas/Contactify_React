import React, {Component} from 'react';
import '../css/FilterCheckbox.css';

class FilterCheckbox extends Component {
    setActivitySelection(e) {
        this.props.activitySelection(e.target.checked);
    }

    render() {
        const checkBoxClass = this.props.active === false ?  "checkbox__input" : "checkbox__input checkbox__input--checked";

        return (
            <div className="checkbox">
                <div className={checkBoxClass}>
                    <input
                        type="checkbox"
                        onChange={(e) => this.setActivitySelection(e)}
                        checked={this.props.active}
                    ></input>
                </div>
                <div className="checkbox__label">Show active</div>
            </div>  
        );
    }
}

export default FilterCheckbox;