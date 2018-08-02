import React, { Component } from 'react';
import '../css/Footer.css';

function getFullNumberString(nr) {
    return nr < 10 ? "0" + nr : nr;
}

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            syncTime: "Not synced",
            items: null,
        }
    }

    setSyncTime() {
        let date = new Date();
        let year = date.getFullYear();
        let month = getFullNumberString(date.getMonth() + 1);
        let day = getFullNumberString(date.getDate());
        let hours = getFullNumberString(date.getHours());
        let minutes = getFullNumberString(date.getMinutes());
        let seconds = getFullNumberString(date.getSeconds());
        let fullDate = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
        this.setState({
            syncTime: fullDate,
        });
        this.props.requestData();
    }

    render() {
        let syncIndicator = this.props.loaded ? "sync-icon" : "sync-icon sync-animation";

        return (
            <footer className="footer">
                <nav className="footer__left">
                    <ul className="left-links">
                        <li>
                            <a href="">Dashboard</a>
                        </li>
                        <li>
                            <a href="">Contacts</a>
                        </li>
                        <li>
                            <a href="">Notifications</a>
                        </li>
                    </ul>
                    <nav className="left-copyright">
                        <div className="copyright-label">&copy; 2015 Contactify</div>
                        <ul className="left-links-bottom">
                            <li>
                                <a href="">About</a>
                            </li>
                            <li>
                                <a href="">Privacy</a>
                            </li>
                        </ul>
                    </nav>
                </nav>
                <div className="footer__center">
                    <div className="top-box">
                        <div className="top-box__icon"></div>
                        <div>
                            <div>Last synced:</div>
                            <div>{this.state.syncTime}</div>
                        </div>
                        <div className="top-box__sync-container" onClick={() => this.setSyncTime()}>
                            <div className={syncIndicator}></div>
                            <div>Force sync</div>
                        </div>
                    </div>
                    <div className="bottom-box">
                        <div className="bottom-box__icon"></div>
                        <div>
                            <div>Help Desk and Resolution center available:</div>
                            <div>I-IV 8:00-18:00, V 8:00-16:45</div>
                        </div>
                    </div>
                </div>
                <nav className="footer__right">
                    <ul className="right-links">
                        <li>
                            <a href="">Groups</a>
                        </li>
                        <li>
                            <a href="">Frequently contacted</a>
                        </li>
                        <li>
                            <a href="">Preferences</a>
                        </li>
                        <li>
                            <a href="">Log out</a>
                        </li>
                    </ul>
                </nav>
            </footer>
        );
    }
}

export default Footer;