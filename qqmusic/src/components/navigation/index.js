import React, { Component, Fragment } from 'react'
import './style.css'

class Navigation extends Component {
  constructor (props) {
    super(props)
    let isAdShow = sessionStorage.getItem('isAdShow')
    let top = 0
    // 如果广告显示
    if(!isAdShow) {
      top = '.5rem'
    }
    this.state = {
      navTopStyle: { top }
    }
  }
  render() {
    return (
      <Fragment>
        <div className="nav-container" style = {this.state.navTopStyle}></div>
        <div className="nav-occupy"></div>
      </Fragment>
    )
  }
}

export default Navigation
