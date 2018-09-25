import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import Home from './routes/Home';
import UserDetail from './routes/UserDetail';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render((
  <Provider store = {store}>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/users/:userId" component={UserDetail}/>
        </div>
      </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
