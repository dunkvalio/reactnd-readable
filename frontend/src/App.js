import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './views/Main';
import CategoryView from './views/CategoryView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/categories/:name/posts' component={CategoryView}/>
        </Switch>
      </div>
    );
  }
}

export default App;
