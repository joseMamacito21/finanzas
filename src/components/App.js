import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Row } from 'reactstrap';

import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Analytics from './Analytics';
import Information from './Information';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Row>
            <Sidebar />
            <Route exact path='/' component={Information}/>
            <Route exact path='/dashboard' component={Dashboard}/>            
            <Route exact path='/analytics' component={Analytics}/>
          </Row>          
        </div>
      </Router>
    );
  }
}

export default App;
