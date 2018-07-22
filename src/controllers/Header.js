import React, { Component } from 'react';
import HeaderMenu from './HeaderMenu';
import '../css/Header.css';

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
                    <div className="header__account">
                        <div className="account-container" id="userAccount">
                            <div className="account-container__avatar"></div>
                            <div>Jorah Mormont</div>
                            <div className="account-container__arrow"></div>
                        </div>
                        <div className="account-actions" id="userAccountActions">
                            <div className="account-actions__row">
                                <div className="row-icon row-icon--groups"></div>
                                <div>Groups</div>
                            </div>
                            <div className="account-actions__row">
                                <div className="row-icon row-icon--contacted"></div>
                                <div>Frequently contacted</div>
                            </div>
                            <div className="account-actions__row">
                                <div className="row-icon row-icon--prefences"></div>
                                <div>Prefences</div>
                            </div>
                            <div className="account-actions__row">
                                <div className="row-icon row-icon--logout"></div>
                                <div className="row-label">Log out</div>
                            </div>
                        </div>
                    </div>
            </header>
        );
    }
}

export default Header;