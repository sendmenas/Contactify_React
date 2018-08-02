import React, {Component} from 'react';
import './FilterInput.css';

const regEx = /[^a-zA-Z\s]/g;

class FilterInput extends Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(e) {
        let nameFilterValue = e.target.value;
        nameFilterValue = nameFilterValue.replace(regEx, "");
        if (nameFilterValue.length === 0) {
            e.target.value = "";
        } else {
            e.target.value = nameFilterValue;
        }
        this.props.onFilterTextChange(nameFilterValue);
    }

    render() {
        return (
            <div className="filter-name">
                <input 
                    className="filter-input"
                    placeholder="Name"
                    type="text"
                    onChange={this.handleFilterTextChange}
                    value={this.props.value}
                ></input>
            </div>
        );
    }
}

export default FilterInput;