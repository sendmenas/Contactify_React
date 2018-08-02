import React, {Component} from 'react';
import '../css/UserBlock.css';

class UserBlock extends Component {
    render () {
        let image = {backgroundImage: `url(${this.props.selectedItem.avatar})`};
        return (
            <aside className="user-block">
                <div className="user-block__avatar" style={image}></div>
                <table className="user-block__data">
                    <tbody>
                        <tr className="data-row">
                            <th className="data-row__label">Name:</th>
                            <th className="data-row__data">{this.props.selectedItem.name}</th>
                        </tr>
                        <tr className="data-row">
                            <th className="data-row__label">Surname:</th>
                            <th className="data-row__data">{this.props.selectedItem.surname}</th>
                        </tr>
                        <tr className="data-row">
                            <th className="data-row__label">City:</th>
                            <th className="data-row__data">{this.props.selectedItem.city}</th>
                        </tr>
                        <tr className="data-row">
                            <th className="data-row__label">Email:</th>
                            <th className="data-row__data data-row__data--email">{this.props.selectedItem.email}</th>
                        </tr>
                        <tr className="data-row">
                            <th className="data-row__label">Phone:</th>
                            <th className="data-row__data">{this.props.selectedItem.phone}</th>
                        </tr>
                    </tbody>
                </table>
            </aside>
        );
    }
}

export default UserBlock;