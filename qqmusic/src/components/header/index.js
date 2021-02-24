import React, { Component, Fragment } from 'react'
import Advertisement from '../advertisement'
import Navigation from '../navigation'

class Header extends Component {
  constructor(props) {
    super(props)
    let isAdShow = sessionStorage.getItem('isAdShow')
    let top = 0
    // 1表示开启广告, 2表示关闭广告
    if (!isAdShow) {
      // 显示广告
      isAdShow = true
      top = '.5rem'
    } else {
      isAdShow = false
    }
    this.state = {
      isAdShow,
      navTopStyle: { top }
    }
    // 绑定this
    this.closeAdvertise = this.closeAdvertise.bind(this)
  }

  closeAdvertise() {
    sessionStorage.setItem('isAdShow', 2)
    this.setState({
      isAdShow: false,
      navTopStyle: { top: 0 }
    })
  }
  render() {
    const { isAdShow, navTopStyle } = this.state
    return (
      <Fragment>
        <Advertisement isAdShow = {isAdShow} closeAdvertise = {this.closeAdvertise}/>
        <Navigation navTopStyle = {navTopStyle} />
      </Fragment>
    )
  }
}

export default Header