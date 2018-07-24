import React, {Component} from 'react';
import '../css/AddContractButton.css';

class AddContractButton extends Component {
    render() {
        return (
            <div className="add-contact-button" id="addNewContact">
                <div className="add-contact-button__plus"></div>
                ADD NEW CONTRACT
            </div>
        );
    }
}

export default AddContractButton;