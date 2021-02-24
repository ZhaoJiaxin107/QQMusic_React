import React, { Component, Fragment } from 'react'
import Advertisement from '../../components/advertisement'
import Navigation from '../../components/navigation'

class Home extends Component {
  render () {
    return (
      <Fragment>
        <Advertisement />
        <Navigation />
      </Fragment>
    )
  }
}

export default Home