import React, {Component} from 'react';
import '../css/ContractDataDialog.css'

class ContractDataDialog extends Component {
    constructor(props) {
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handleAvatarChange = this.handleAvatarChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
    }

    handleNameChange(item, evt) {
        item.name = evt.target.value;
    }

    handleSurnameChange(item, evt) {
        item.surname = evt.target.value;
    }

    handleAvatarChange(item, evt) {
        item.avatar = evt.target.value;
    }

    handleCityChange(item, evt) {
        item.city = evt.target.value;
    }

    handleEmailChange(item, evt) {
        item.email = evt.target.value;
    }

    handlePhoneChange(item, evt) {
        item.phone = evt.target.value;
    }

    createItem(data) {
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

        let itemData = {
            name: this.props.data.name,
            surname: this.props.data.surname,
            avatar: this.props.data.avatar,
            city: this.props.data.city,
            email: this.props.data.email,
            phone: this.props.data.phone,
            active: this.props.data.active,
            id: this.props.data.id,
        };
        const name = this.props.data.name === null ? "" : this.props.data.name; 
        const surname = this.props.data.surname === null ? "" : this.props.data.surname; 
        const avatar = this.props.data.avatar === null ? "" : this.props.data.avatar; 
        const city = this.props.data.city === null ? "" : this.props.data.city; 
        const email = this.props.data.email === null ? "" : this.props.data.email; 
        const phone = this.props.data.phone === null ? "" : this.props.data.phone;        
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
                            onChange={(evt) => this.handleNameChange(itemData, evt)}
                            defaultValue={name}
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
                                onChange={(evt) => this.handleSurnameChange(itemData, evt)}
                                defaultValue={surname}
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
                                onChange={(evt) => this.handleAvatarChange(itemData, evt)}
                                defaultValue={avatar}
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
                                onChange={(evt) => this.handleCityChange(itemData, evt)}
                                defaultValue={city}
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
                                onChange={(evt) => this.handleEmailChange(itemData, evt)}
                                defaultValue={email}
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
                                onChange={(evt) => this.handlePhoneChange(itemData, evt)}
                                defaultValue={phone}
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