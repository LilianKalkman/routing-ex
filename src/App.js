import React, { Component } from 'react';
import Course from './containers/Course/Course';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import { Route, NavLink, Redirect, Switch } from 'react-router-dom';
import './App.css';
import NotFound from './notfound';

class App extends Component {
  render () {
    return (
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><NavLink to="/users">Users</NavLink></li>
              <li><NavLink to="/courses">Courses</NavLink></li>
            </ul>
          </nav>
        </header>
        <div>
          <Switch>
            <Route path="/courses" component={Courses}/>
            <Route path="/users" component={Users}/>
            <Route component={NotFound}/>
            <Redirect from="/" to="/courses"/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;


  // <li>Add a 404 error page and render it for any unknown routes</li>
