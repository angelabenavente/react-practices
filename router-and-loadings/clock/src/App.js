import React from 'react';
import './App.css';
import Home from './Home.js';
import Clock from './Clock.js';
import About from './About.js';
import { Link, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  // ...
  render() {
  return (
    <div>
      <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Clock">Clock</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
            </ul>
          </nav>
        </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Clock" component={Clock} />
        <Route path="/About" component={About} />
      </Switch>
    </div>
  )};
}

export default App;
