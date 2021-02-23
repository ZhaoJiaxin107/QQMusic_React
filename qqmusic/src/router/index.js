import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/home'
import Hot from '../pages/hot'
import MusicList from '../pages/list'
import Play from '../pages/play'
import Search from '../pages/search'

class MusicRouter extends Component {
  render () {
    return (
      <Router>
          <Switch>
              <Route path = "/" exact component = {Home}></Route>
              <Route path = "/hot" exact component = {Hot}></Route>
              <Route path = "/list" exact component = {MusicList}></Route>
              <Route path = "/play" exact component = {Play}></Route>
              <Route path = "/search" exact component = {Search}></Route>
          </Switch>
      </Router>
    )
  }
}

export default MusicRouter