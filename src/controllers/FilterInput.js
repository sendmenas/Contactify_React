import React, {Component} from 'react';
import '../css/FilterInput.css';

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
        console.log(this.props);
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
                ></input>
            </div>
        );
    }
}

export default FilterInput;