// outsource dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// local dependencies
import App from './app';
import { store } from './store';

// styles
import './style/main.scss';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

