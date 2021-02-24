import React, { Component, Fragment } from 'react'
import './style.css'

class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <div className="nav-container" style = {this.props.navTopStyle}></div>
        <div className="nav-occupy"></div>
      </Fragment>
    )
  }
}

export default Navigation
