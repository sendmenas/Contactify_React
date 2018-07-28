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
            predefinedContractData: null,
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
    
    displayContractDataDialog(data) {
        if (data === null) {
            this.setState({
                predefinedContractData: null,
                showContractDialog: true,
            });
        } else {
            this.setState({
                predefinedContractData: data,
                showContractDialog: true,
            });
        }
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
            console.log(item);
        }
    }
    
    removeContractItem(id) {
        if (id !== null) {
            const itemsArr = this.state.items.slice(0);
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
                    showContractDataDialog={(data) => this.displayContractDataDialog(data)}
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
