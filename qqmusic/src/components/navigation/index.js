import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <div className="nav-container" style = {this.props.navTopStyle}>
          <NavLink to = "/" exact>首页</NavLink>
          <NavLink to = "/hot">热歌榜</NavLink>
          <NavLink to = "/search">搜索</NavLink>
        </div>
        <div className="nav-occupy"></div>
      </Fragment>
    )
  }
}

export default Navigation
