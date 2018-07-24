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
    
    setDataItems(data) {
        this.setState({
            items: data,
            itemsReceived: true,
        });
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
                    setDataItems={(data) => this.setDataItems(data)}
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
