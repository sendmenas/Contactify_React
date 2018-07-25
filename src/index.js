import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Header from './controllers/Header';
import Main from './controllers/Main';
import Footer from './controllers/Footer';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            itemsReceived: false,
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
    
    render() {
        let isLoaded = this.state.itemsReceived;
        let items = this.state.items;

        return (
            <div className='page'>
                <Header />
                <Main 
                    items={items}
                    loaded={isLoaded}
                />
                <Footer 
                    requestData={() => this.requestData()}
                    loaded={isLoaded}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root'));
registerServiceWorker();
