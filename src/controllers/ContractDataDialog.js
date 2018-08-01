import React, {Component} from 'react';
import '../css/ContractDataDialog.css'

class ContractDataDialog extends Component {
    constructor(props) {
        super(props);
        this.nameInput = React.createRef();
        this.surnameInput = React.createRef();
        this.cityInput = React.createRef();
        this.avatarInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }

    createItem(data) {
        console.log(data);
        if (data.name.length > 0 &&
            data.surname.length > 0 &&
            data.avatar.length > 0 &&
            data.city.length > 0 &&
            data.email.length > 0 &&
            data.phone.length > 0
        ) {
            this.props.updateItems(data);
            this.props.hideDialog();
        }
    }

    render() {
        const dialogDisplayState = {
            display: this.props.displayDialog ? 'flex' : 'none',
        }
        
        let itemData = this.props.data;

        const name = itemData.name === null ? "" : itemData.name; 
        const surname = itemData.surname === null ? "" : itemData.surname; 
        const avatar = itemData.avatar === null ? "" : itemData.avatar; 
        const city = itemData.city === null ? "" : itemData.city; 
        const email = itemData.email === null ? "" : itemData.email; 
        const phone = itemData.phone === null ? "" : itemData.phone;
        
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
                            ref={this.nameInput}
                            type="text"
                            className="user-data-dialog__container__row__input"
                            onChange={() => this.props.handleNameChange(this.nameInput.current.value)}
                            value={name}
                        ></input>
                    </div>
                    <div className="user-data-dialog__container__row">
                        <label
                            htmlFor="userDataDialogSurname"
                            className="user-data-dialog__container__row__label"
                        >Surname:</label>
                        <input
                            ref={this.surnameInput}
                            type="text"
                            className="user-data-dialog__container__row__input"
                            onChange={() => this.props.handleSurnameChange(this.surnameInput.current.value)}
                            value={surname}
                        ></input>
                    </div>
                    <div className="user-data-dialog__container__row">
                        <label
                            htmlFor="userDataDialogAvatar"
                            className="user-data-dialog__container__row__label"
                        >Avatar:</label>
                        <input
                            ref={this.avatarInput}
                            type="text"
                            className="user-data-dialog__container__row__input"
                            onChange={() => this.props.handleAvatarChange(this.avatarInput.current.value)}
                            value={avatar}
                        ></input>
                    </div>
                    <div className="user-data-dialog__container__row">
                        <label
                            htmlFor="userDataDialogCity"
                            className="user-data-dialog__container__row__label"
                        >City:</label>
                        <input
                            ref={this.cityInput}
                            type="text"
                            className="user-data-dialog__container__row__input"
                            onChange={() => this.props.handleCityChange(this.cityInput.current.value)}
                            value={city}
                        ></input>
                    </div>
                    <div className="user-data-dialog__container__row">
                        <label
                            htmlFor="userDataDialogEmail"
                            className="user-data-dialog__container__row__label"
                        >Email:</label>
                        <input
                            ref={this.emailInput}
                            type="text"
                            className="user-data-dialog__container__row__input"
                            onChange={() => this.props.handleEmailChange(this.emailInput.current.value)}
                            value={email}
                        ></input>
                    </div>
                    <div className="user-data-dialog__container__row">
                        <label
                            htmlFor="userDataDialogPhone"
                            className="user-data-dialog__container__row__label"
                        >Phone:</label>
                        <input
                            ref={this.phoneInput}
                            type="text"
                            className="user-data-dialog__container__row__input"
                            onChange={() => this.props.handlePhoneChange(this.phoneInput.current.value)}
                            value={phone}
                        ></input>
                    </div>
                    <div
                        className="user-data-dialog__container__submit"
                        onClick={() => this.createItem(itemData)}
                    >SUBMIT</div>
                </form>
            </dialog>
        );
    }
}

export default ContractDataDialog;