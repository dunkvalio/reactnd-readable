import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './views/Main';
import Category from './views/Category';
import PostDetails from './views/PostDetails';
import EditPost from './views/EditPost';
import './App.css';

class App extends Component {
  render() {
    return <div className="App">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/category/:name/posts" component={Category} />
          <Route exact path="/posts/edit" component={EditPost} />
          <Route exact path="/posts/:id" component={PostDetails} />
        </Switch>
      </div>;
  }
}

export default App;
