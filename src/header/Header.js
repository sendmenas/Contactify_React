import React, { Component } from 'react';
import HeaderMenu from './HeaderMenu';
import HeaderAccount from './HeaderAccount';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header__logo"></div>
                <HeaderMenu />
                <div className="header__search">
                    <input className="search-input" placeholder="Search" type="text"></input>
                    <div className="search-icon"></div>
                </div>
                <HeaderAccount />
            </header>
        );
    }
}

export default Header;