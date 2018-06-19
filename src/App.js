import React, { Component } from 'react';
import { config } from './config.js';
import { Info } from './Info.js';
import { CampingInfo } from './CampingInfo.js';
import { ReserveCamping } from './ReserveCamping.js';
import { ReserveNoCamping } from './ReserveNoCamping.js';
import logo from './media/wedfest_logo.png';
import names from './media/wedfest_names_header.png';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
const startingState = {};
class App extends Component {
    constructor() {
        super();
        this.state = startingState;
        this.state.config = config;
        console.log(this.state.config);
    }
  render() {

    return (
      <div className="App">
          <iframe id="video-background" frameBorder="0" src="https://www.youtube.com/embed/xNN7iTA57jM?rel=0&amp;controls=0&amp;showinfo=0;autoplay=1&modestbranding=1" allow="autoplay; encrypted-media; modest-branding" allowFullScreen>
          </iframe>

          <img src={logo} id="wedfest-logo" alt="logo" />
          <img src={names} id="names-header" alt="evan & amanda" />
          <div className="main-body">
              <Router>
                  <Route path='/rsvp' component={ReserveNoCamping} />
              </Router>
              <Router>
                  <Route path='/vip' component={ReserveCamping} />
              </Router>
          </div>
          <Info state={ this.state } />
      </div>
    );
  }
}

export default App;
