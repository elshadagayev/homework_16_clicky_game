import React, { Component } from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import {HomePage, ScoreHistory } from "../containers"
import { MainMenu } from "./Menu"
import { ConnectedRouter } from 'react-router-redux'
import { history } from "../store"

class App extends Component {
  render() {
    return (
      <div>
        {/*<ConnectedRouter history={history}>*/}
        <Router>
          <div>
            <MainMenu />
            <Route path="/" component={HomePage} />
            <Route path="/scores" component={ScoreHistory} />
          </div>
        </Router>
        {/*</ConnectedRouter>*/}
      </div>
    );
  }
}

export default App;
