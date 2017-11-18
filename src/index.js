import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Inicio from './inicio';
import Portafolio from './portafolio';
import Conoceme from './conoceme';
import { Provider } from "redux-zero/react";
import {HashRouter, Switch, Route} from 'react-router-dom'
import store from './store'
import registerServiceWorker from './registerServiceWorker';

const Index = () => (
    <Provider store={store}>
       <HashRouter>
          <Switch>
             <Route  exact path = "/" component={Inicio}/>
             <Route  exact path = "/conoceme" component={Conoceme}/>  
             <Route exact path="/portafolio" component={Portafolio}/>
             <Route exact path="/conoceme" component={Conoceme}/>  
           </Switch>
       </HashRouter>
    </Provider>
 )
ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
