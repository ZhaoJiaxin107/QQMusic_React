import React, { Component, Fragment } from 'react'
import Advertisement from '../../components/advertisement'
import Navigation from '../../components/navigation'

class Home extends Component {
  constructor(props) {
    super(props)
    let isAdShow = sessionStorage.getItem('isAdShow')
    // 1表示开启广告, 2表示关闭广告
    if (!isAdShow) {
      isAdShow = true
    } else {
      isAdShow = false
    }
    this.state = {
      isAdShow
    }
    // 绑定this
    this.closeAdvertise = this.closeAdvertise.bind(this)
  }

  closeAdvertise() {
    sessionStorage.setItem('isAdShow', 2)
    this.setState({
      isAdShow: false
    })
  }
  render() {
    const { isAdShow } = this.state
    return (
      <Fragment>
        <Advertisement isAdShow = {isAdShow} closeAdvertise = {this.closeAdvertise}/>
        <Navigation />
      </Fragment>
    )
  }
}

export default Home