import React, { Component } from 'react';
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom';
import Conversation from './components/conversation';
import Texting from './components/texting';
import Whoops404 from './components/whoops404';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <HashRouter>
           <Switch>
             <Route exact path="/conversation" component={Conversation} />
             <Route path="/texting" component={Texting} />
             <Redirect from="/" to="/conversation" />
             <Route component={Whoops404} />

           </Switch>
         </HashRouter>
      </div>
    );
  }
}

export default App;
