import React, {Component} from 'react';
import './FilterDropdown.css';

function DropdownItem (props) {
    return (
        <div 
            onClick={() => props.onClick(props.value)}
            className="cities-container__city">{props.value}
        </div>
    );
}

class FilterDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownVisibility: "hidden",
        }
    }

    onFilterCitySelection(value) {
        this.props.onFilterItemSelected(value);
    }

    toggleList() {
        let visibile = this.state.dropdownVisibility === "hidden" ? "visible" : "hidden";
        this.setState({
            dropdownVisibility: visibile,
        });
    }

    render() {
        let cityArr = [];
        let dropdownList = [];
        this.props.dataItems.forEach((item) => {
            if (cityArr.indexOf(item.city) === -1) {
                cityArr.push(item.city);
                dropdownList.push(<DropdownItem 
                    key={item.city}
                    value={item.city}
                    onClick={(value) => this.onFilterCitySelection(value)}
                />)
            }
        });

        let selectedCity = this.props.selectedCity === "" ? "City" : this.props.selectedCity;

        let divStyle = {
            visibility: this.state.dropdownVisibility,
        }

        return (
            <div className="filter-city" onClick={() => this.toggleList()}>
                <div>{selectedCity}</div>
                <div className="filter-city__arrow"></div>
                <div className="filter-city__select" style={divStyle}>
                    <div>City</div>
                    <div className="cities-container">
                        {dropdownList}
                    </div>
                </div>                     
            </div>
        );
    }
}

export default FilterDropdown;