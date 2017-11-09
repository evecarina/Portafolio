import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Inicio from './inicio';
import { Provider } from "redux-zero/react";
import store from './store'
import registerServiceWorker from './registerServiceWorker';

const Index =()=>(
    <Provider store={store}>
        <Inicio/>
    </Provider>
);
ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
