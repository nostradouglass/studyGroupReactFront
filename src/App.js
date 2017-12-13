import React, { Component } from 'react';
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import CreateUser from './components/CreateUser'
import AllUsers from './components/AllUsers'
import Home from './components/Home'
import User from './components/User'

class App extends Component {

  constructor(props) {
    super(props)

  }

  render() {
    return (
      <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create_user">Create User</Link></li>
          <li><Link to="/all_users">All Users</Link></li>
        </ul>
  
        <hr/>
  
        <Route exact path="/" component={Home}/>
        <Route path="/create_user" component={CreateUser}/>
        <Route path="/all_users" component={AllUsers}/>
        <Route path="/User/:id" component={User}/>
      </div>
    </Router>
    );
  }
}

export default App;



