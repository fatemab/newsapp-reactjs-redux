import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ChooseNewspaper from './Component/ChooseNewspaper';
import News from './Component/News';
import NewsDetail from './Component/NewsDetail';
import {Provider} from 'react-redux';
import {store} from './store/index';
import * as serviceWorker from './serviceWorker';
import Header from './Component/Header';

const routing = (
  <Provider store={store}>
    <Router>              
      <div>
        <Route path="/" component={Header} />      
        <Route exact path="/" component={ChooseNewspaper} />
        <Route path="/news/:name" component={News} />
        <Route path="/newsDetail" component={NewsDetail} />
        <Route exact path="/chooseNewsPaper" component={ChooseNewspaper} />
      </div>
    </Router>
  </Provider>
  )

  

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
