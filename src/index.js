import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Header from './controllers/Header';
import Main from './controllers/Main';
import Footer from './controllers/Footer';
import ContractDataDialog from './controllers/ContractDataDialog';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            itemsReceived: false,
            showContractDialog: false,
            predefinedContractData: {
                name: null,
                surname: null,
                avatar: null,
                city: null,
                email: null,
                phone: null,
                active: false,
                id: null,
            },
        }
    }
    
    requestData() {
        fetch('https://raw.githubusercontent.com/sendmenas/MBS_Contactify/master/contacts.json')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        items: result,
                        itemsReceived: true,
                    });
                },
                (error) => {
                    this.setState({
                        itemsReceived: false,
                    });
                }
            )
    }

    componentDidMount() {
        this.requestData();
    }
    
    displayContractDataDialog() {
        this.setState({
            predefinedContractData: {
                name: null,
                surname: null,
                avatar: null,
                city: null,
                email: null,
                phone: null,
                active: false,
                id: null,
            },
            showContractDialog: true,
        });
    }

    setContractDataAndShowDialog(data) {
        this.setState({
            predefinedContractData: {
                name: data.name,
                surname: data.surname,
                avatar: data.avatar,
                city: data.city,
                email: data.email,
                phone: data.phone,
                active: data.active,
                id: data.id,
            },
            showContractDialog: true,
        });
    }
    
    hideContractDataDialog() {
        this.setState({
            showContractDialog: false,
        });
    }

    updateItems(item) {
        if (item.id === null) {
            const maxId = Math.max(...(this.state.items.map((item) => item.id)));
            item.id = maxId + 1;
            this.state.items.push(item);
        } else {
            const itemsArr = this.state.items.slice();
            for(let dItem of itemsArr) {
                if (dItem.id === item.id) {
                    dItem.name = item.name;
                    dItem.surname = item.surname;
                    dItem.city = item.city;
                    dItem.avatar = item.avatar;
                    dItem.email = item.email;
                    dItem.phone = item.phone;
                    dItem.active = item.active;
                    dItem.id = item.id;
                }
            }
            this.setState({
                items: itemsArr
            });
        }
    }
    
    removeContractItem(id) {
        if (id !== null) {
            const itemsArr = this.state.items.slice();
            const itemIndex = this.state.items.findIndex((item) => item.id === id);
            itemsArr.splice(itemIndex, 1);
            this.setState({
                items: itemsArr,
            });
        }
    }

    render() {
        let isLoaded = this.state.itemsReceived;
        let items = this.state.items;
        let displayDialog = this.state.showContractDialog;
        let contractData = this.state.predefinedContractData;

        return (
            <div className='page'>
                <Header />
                <Main
                    showContractDataDialog={() => this.displayContractDataDialog()}
                    showContractDataDialogWithData={(data) => this.setContractDataAndShowDialog(data)}
                    items={items}
                    removeItem={(id) => this.removeContractItem(id)}
                />
                <Footer 
                    requestData={() => this.requestData()}
                    loaded={isLoaded}
                />
                <ContractDataDialog 
                    displayDialog={displayDialog}
                    hideDialog={() => this.hideContractDataDialog()}
                    updateItems={(newItem) => this.updateItems(newItem)}
                    data={contractData}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root'));
registerServiceWorker();
