import React, { Component } from 'react';
import '../css/HeaderMenu.css';

function Tab(props) {
    return (
        <li
            className={props.isSelected ? 'header-tab selected-tab' : 'header-tab'}
            onClick={props.onClick}
        >
            {props.value}
        </li>
    );
}

class HeaderMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [{
                name: 'dashboard',
                isSelected: false,
            },
            {
                name: 'contacts',
                isSelected: true,
            },
            {
                name: 'notifications',
                isSelected: false,
            }],
        }
    }

    setSelected(index) {
        let updatedTabs = this.state.tabs.slice();
        for (let i = 0; i < updatedTabs.length; i++) {
            if (i === index) {
                updatedTabs[i].isSelected = true;
            } else {
                updatedTabs[i].isSelected = false;
            }
        }
        this.setState({
            tabs: updatedTabs,
        });
    }

    render() {

        let tabs = this.state.tabs.map((tab, index) => {
            return (
                <Tab 
                    isSelected={tab.isSelected}
                    value={tab.name}
                    key={tab.name}
                    onClick={() => this.setSelected(index)}
                />
            )
        })

        return (
            <nav className="header__tabs">
                <ul>
                    {tabs}
                </ul>
            </nav>
        );
    }
}

export default HeaderMenu;