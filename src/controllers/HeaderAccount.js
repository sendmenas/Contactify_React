import React, { Component } from 'react';
import '../css/HeaderAccount.css';

function Row(props) {
    return (
        <div className="account-actions__row">
            <div className={`row-icon ${props.iconClass}`}></div>
            <div>{props.value}</div>
        </div>
    );
}

class HeaderAccountActions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [{
                value: 'Groups',
                iconClass: 'row-icon--groups',
            },
            {
                value: 'Frequently contacted',
                iconClass: 'row-icon--contacted',
            },
            {
                value: 'Prefences',
                iconClass: 'row-icon--prefences',
            },
            {
                value: 'Log out',
                iconClass: 'row-icon--logout',
            }],
        }
    }
    
    render() {
        let rows = this.state.rows.map((row, index) => {
            return (
                <Row
                    iconClass={row.iconClass}
                    value={row.value}
                    key={row.value}
                />
            )
        })

        let divStyle = {
            visibility: this.props.visibility ? 'visible' : 'hidden',
        }

        return (
            <div className="account-actions" style={divStyle}>
                {rows}
            </div>
        );
    }
}

class HeaderAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            acctionsVisble: false, 
        }
    }

    tooglMenu() {
        let containerVisibility = this.state.acctionsVisble;
        this.setState({
            acctionsVisble: !containerVisibility,
        });
    }

    render() {
        return (
            <div className="header__account">
                <div className="account-container" onClick={() => this.tooglMenu()}>
                    <div className="account-container__avatar"></div>
                    <div>Jorah Mormont</div>
                    <div className="account-container__arrow"></div>
                </div>
                <HeaderAccountActions 
                    visibility={this.state.acctionsVisble}
                />
            </div>
        );
    }
}

export default HeaderAccount;