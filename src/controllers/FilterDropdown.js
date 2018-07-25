import React, {Component} from 'react';
import '../css/FilterDropdown.css';

function DropdownItem (props) {
    return (
        <div className="cities-container__city">{props.value}</div>
    );
}

class FilterDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownVisibility: "hidden",
        }
    }

    toggleList() {
        const visibile = this.state.dropdownVisibility === "hidden" ? "visible" : "hidden";
        this.setState({
            dropdownVisibility: visibile,
        });
    }

    render() {

        const cityArr = [];
        const dropdownList = this.props.dataItems.map((item) => {
            if (cityArr.indexOf(item.city) === -1) {
                cityArr.push(item.city);
                return (<DropdownItem 
                    key={item.city}
                    value={item.city}
                    onClick={() => {}}
                />)
            }
        });

        const divStyle = {
            visibility: this.state.dropdownVisibility,
        }

        return (
            <div className="filter-city" onClick={() => this.toggleList()}>
                <div>City</div>
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