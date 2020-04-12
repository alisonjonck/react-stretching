import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/Pages/Index';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Index />
    </Provider>,
    document.getElementById('app')
);
