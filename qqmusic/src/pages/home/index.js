import React, { Component, Fragment } from 'react'
import Header from '../../components/header'
// 引入接口文件
import { getBanner } from '../../api/banner'
class Home extends Component {
  
  componentDidMount () {
    getBanner().then(res => {
      console.log(res)
    }).catch( err => {
      console.log(err)
    })
  }

  render() {
    return (
      <Fragment>
        <Header />
      </Fragment>
    )
  }
}

export default Home