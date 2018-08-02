import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import ContractDataDialog from './dialog/ContractDataDialog';
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
            nameSortDirection: "none",
            surnameSortDirection: "none",
        }
    }
    
    requestData() {
        this.setState({
            itemsReceived: false,
        });
        fetch('https://raw.githubusercontent.com/sendmenas/MBS_Contactify/master/contacts.json')
            .then(res => res.json())
            .then(
                (result) => {
                    this.addItemsWithDelay(result);
                    this.setState({
                        nameSortDirection: "none",
                        surnameSortDirection: "none",
                    });
                },
                (error) => {
                    this.setState({
                        itemsReceived: true,
                    });
                }
            )
    }

    addItemsWithDelay(responseItems) {
        let items = [];
        for (let item in responseItems) {
            setTimeout(function() {
                items.push(responseItems[item]);
                this.setState({
                    items: items,
                });
            }.bind(this), 300 * item);
        }
        setTimeout(function() {
            this.setState({
                itemsReceived: true,
            });
        }.bind(this), 300 * responseItems.length);
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
            let maxId = Math.max(...(this.state.items.map((item) => item.id)));
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
            let itemsArr = this.state.items.slice();
            let itemIndex = this.state.items.findIndex((item) => item.id === id);
            itemsArr.splice(itemIndex, 1);
            this.setState({
                items: itemsArr,
            });
        }
    }

    handleNameChange(val) {
        let updatedContract = Object.assign({}, this.state.predefinedContractData);
        updatedContract.name = val;
        this.setState({
            predefinedContractData: updatedContract,
        })
    }

    handleSurnameChange(val) {
        let updatedContract = Object.assign({}, this.state.predefinedContractData);
        updatedContract.surname = val;
        this.setState({
            predefinedContractData: updatedContract,
        })
    }

    handleAvatarChange(val) {
        let updatedContract = Object.assign({}, this.state.predefinedContractData);
        updatedContract.avatar = val;
        this.setState({
            predefinedContractData: updatedContract,
        })
    }

    handleCityChange(val) {
        let updatedContract = Object.assign({}, this.state.predefinedContractData);
        updatedContract.city = val;
        this.setState({
            predefinedContractData: updatedContract,
        })
    }

    handleEmailChange(val) {
        let updatedContract = Object.assign({}, this.state.predefinedContractData);
        updatedContract.email = val;
        this.setState({
            predefinedContractData: updatedContract,
        })
    }

    handlePhoneChange(val) {
        let updatedContract = Object.assign({}, this.state.predefinedContractData);
        updatedContract.phone = val;
        this.setState({
            predefinedContractData: updatedContract,
        })
    }

    sortByName() {
        let items = this.state.items;
        let currentSort = this.state.nameSortDirection;
        if (currentSort === "none") {
            currentSort = "desc";
        } else if (currentSort === "asc") {
            currentSort = "desc";
        } else if (currentSort === "desc") {
            currentSort = "asc";
        }
        if (items != null && items.length > 0) {
            switch(currentSort) {
                case "asc":
                    items.sort(function(a, b) {
                        return a.name < b.name;
                    });
                    break;
                case "desc":
                    items.sort(function(a, b) {
                        return a.name > b.name;
                    });
                    break;
                default:
                    items.sort(function(a, b) {
                        return a.name > b.name;
                    });
                    break;
            }
        }
        this.setState({
            items: items,
            nameSortDirection: currentSort,
            surnameSortDirection: "none",
        });
    }

    sortBySurname() {
        let items = this.state.items;
        let currentSort = this.state.surnameSortDirection;
        if (currentSort === "none") {
            currentSort = "desc";
        } else if (currentSort === "asc") {
            currentSort = "desc";
        } else if (currentSort === "desc") {
            currentSort = "asc";
        }
        if (items != null && items.length > 0) {
            switch(currentSort) {
                case "asc":
                    items.sort(function(a, b) {
                        return a.surname < b.surname;
                    });
                    break;
                case "desc":
                    items.sort(function(a, b) {
                        return a.surname > b.surname;
                    });
                    break;
                default:
                    items.sort(function(a, b) {
                        return a.surname > b.surname;
                    });
                    break;
            }
        }
        this.setState({
            items: items,
            surnameSortDirection: currentSort,
            nameSortDirection: "none",
        });
    }

    render() {
        let isLoaded = this.state.itemsReceived;
        let items = this.state.items;
        let displayDialog = this.state.showContractDialog;
        let contractData = this.state.predefinedContractData;
        let nameSortDirection = this.state.nameSortDirection;
        let surnameSortDirection = this.state.surnameSortDirection;

        return (
            <div className='page'>
                <Header />
                <Main
                    showContractDataDialog={() => this.displayContractDataDialog()}
                    showContractDataDialogWithData={(data) => this.setContractDataAndShowDialog(data)}
                    items={items}
                    removeItem={(id) => this.removeContractItem(id)}
                    nameSortDirection={nameSortDirection}
                    surnameSortDirection={surnameSortDirection}
                    sortByName={() => this.sortByName()}
                    sortBySurname={() => this.sortBySurname()}
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
                    handleNameChange={(val) => this.handleNameChange(val)}
                    handleSurnameChange={(val) => this.handleSurnameChange(val)}
                    handleAvatarChange={(val) => this.handleAvatarChange(val)}
                    handleCityChange={(val) => this.handleCityChange(val)}
                    handleEmailChange={(val) => this.handleEmailChange(val)}
                    handlePhoneChange={(val) => this.handlePhoneChange(val)}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root'));
registerServiceWorker();
