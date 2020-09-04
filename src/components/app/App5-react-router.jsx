import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import About from '../../view/about/about'
import Home from '../../view/home/home'
import MyNavLink from '../myNavLink/myNavLink'

import './app.css'

class App extends React.Component {

  render () {
    return (
      <div className="app-index">
        <div className="app-header">
          <h1>React Router Demo</h1>
        </div>
        <div className="app-body">
          <ul className="left-nav">
            <li className="nav-link">
              <MyNavLink to="/about">About</MyNavLink>
            </li>
            <li className="nav-link">
              <MyNavLink to="/home">Home</MyNavLink>
            </li>
          </ul>
          <section className="nav-component">
            <Switch>
              <Route path="/about" component={About}/>
              <Route path="/home" component={Home}/>
              <Redirect to="/home"/>
            </Switch>
          </section>
        </div>
      </div>
    )
  }
}
export default App
