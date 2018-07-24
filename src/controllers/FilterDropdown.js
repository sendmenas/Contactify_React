import React, {Component} from 'react';
import '../css/FilterDropdown.css';

class FilterDropdown extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="filter-city" id="cityFilter">
                <div id="cityFilterSelection">City</div>
                <div className="filter-city__arrow"></div>
                <div className="filter-city__select" id="citySelect">
                    <div>City</div>
                    <div className="cities-container" id="citySelectContainer"></div>
                </div>
            </div>
        );
    }
}

export default FilterDropdown;