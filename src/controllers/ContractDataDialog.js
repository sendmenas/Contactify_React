import React, {Component} from 'react';
import '../css/ContractDataDialog.css'

class ContractDataDialog extends Component {
    constructor(props) {
        super(props);

        if (this.props.data !== null) {
            this.setState({
                name: this.props.name,
                surname: this.props.surname,
                avatar: this.props.avatar,
                city: this.props.city,
                email: this.props.email,
                phone: this.props.phone,
                id: null,
            });
        }
        this.state = {
            name: "",
            surname: "",
            avatar: "",
            city: "",
            email: "",
            phone: "",
            id: null,
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handleAvatarChange = this.handleAvatarChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value,
        });
    }

    handleSurnameChange(event) {
        this.setState({
            surname: event.target.value,
        });
    }

    handleAvatarChange(event) {
        this.setState({
            avatar: event.target.value,
        });
    }

    handleCityChange(event) {
        this.setState({
            city: event.target.value,
        });
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value,
        });
    }

    handlePhoneChange(event) {
        this.setState({
            phone: event.target.value,
        });
    }

    createItem() {
        if (this.state.name.length > 0 &&
            this.state.surname.length > 0 &&
            this.state.avatar.length > 0 &&
            this.state.city.length > 0 &&
            this.state.email.length > 0 &&
            this.state.phone.length > 0
        ) {
            let item = {
                name: this.state.name,
                surname: this.state.surname,
                avatar: this.state.avatar,
                city: this.state.city,
                email: this.state.email,
                phone: this.state.phone,
                id: this.state.id,
            }
            this.props.updateItems(item);
            this.props.hideDialog();
            this.setState({
                name: "",
                surname: "",
                avatar: "",
                city: "",
                email: "",
                phone: "",
                id: null,
            });
        }
    }

    render() {
        const dialogDisplayState = {
            display: this.props.displayDialog ? 'flex' : 'none',
        }

        const name = this.props.data === null ? "" : this.props.data.name; 
        const surname = this.props.data === null ? "" : this.props.data.surname; 
        const avatar = this.props.data === null ? "" : this.props.data.avatar; 
        const city = this.props.data === null ? "" : this.props.data.city; 
        const email = this.props.data === null ? "" : this.props.data.email; 
        const phone = this.props.data === null ? "" : this.props.data.phone; 
        
        return(
            <dialog className="user-data-dialog" style={dialogDisplayState}>
                <form className="user-data-dialog__container">
                    <div
                        className="user-data-dialog__container__close"
                        onClick={() => this.props.hideDialog()}
                    ></div>
                    <div className="user-data-dialog__container__row">
                        <label
                            htmlFor="userDataDialogName"
                            className="user-data-dialog__container__row__label"
                        >Name:</label>
                        <input
                            type="text"
                            className="user-data-dialog__container__row__input"
                            onChange={this.handleNameChange}
                            value={name}
                        ></input>
                    </div>
                        <div className="user-data-dialog__container__row">
                            <label
                                htmlFor="userDataDialogSurname"
                                className="user-data-dialog__container__row__label"
                            >Surname:</label>
                            <input
                                type="text"
                                className="user-data-dialog__container__row__input"
                                onChange={this.handleSurnameChange}
                                value={surname}
                            ></input>
                        </div>
                        <div className="user-data-dialog__container__row">
                            <label
                                htmlFor="userDataDialogAvatar"
                                className="user-data-dialog__container__row__label"
                            >Avatar:</label>
                            <input
                                type="text"
                                className="user-data-dialog__container__row__input"
                                onChange={this.handleAvatarChange}
                                value={avatar}
                            ></input>
                        </div>
                        <div className="user-data-dialog__container__row">
                            <label
                                htmlFor="userDataDialogCity"
                                className="user-data-dialog__container__row__label"
                            >City:</label>
                            <input
                                type="text"
                                className="user-data-dialog__container__row__input"
                                onChange={this.handleCityChange}
                                value={city}
                            ></input>
                        </div>
                        <div className="user-data-dialog__container__row">
                            <label
                                htmlFor="userDataDialogEmail"
                                className="user-data-dialog__container__row__label"
                            >Email:</label>
                            <input
                                type="text"
                                className="user-data-dialog__container__row__input"
                                onChange={this.handleEmailChange}
                                value={email}
                            ></input>
                        </div>
                        <div className="user-data-dialog__container__row">
                            <label
                                htmlFor="userDataDialogPhone"
                                className="user-data-dialog__container__row__label"
                            >Phone:</label>
                            <input
                                type="text"
                                className="user-data-dialog__container__row__input"
                                onChange={this.handlePhoneChange}
                                value={phone}
                            ></input>
                        </div>
                        <div
                            className="user-data-dialog__container__submit"
                            onClick={() => this.createItem()}
                        >SUBMIT</div>
                </form>
            </dialog>
        );
    }
}

export default ContractDataDialog;