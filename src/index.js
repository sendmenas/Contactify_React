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
            items: null,
            itemsReceived: false,
        }
    }
    
    setDataItems(data) {
        console.log(data);
        this.setState({
            items: data,
        });
        console.log(this.state.items);
    }
    
    render() {
        let isLoaded = this.state.itemsReceived;

        return (
            <div className='page'>
                <Header />
                <Main 
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
