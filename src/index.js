import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Header from './controllers/Header';
import Main from './controllers/Main';
import Footer from './controllers/Footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div className='page'>
        <Header />
        <Main />
        <Footer />
    </div>
    ,
    document.getElementById('root'));
registerServiceWorker();
