import React, { Component, Fragment } from 'react'
// 导入组件
import Header from '../../components/header'
import Banner from './components/banner'
// 引入接口文件
import { getBanner } from '../../api/banner'
class Home extends Component {

  constructor (props) {
    super(props)
    this.state = {
      banners: []
    }
  }
  componentDidMount () {
    getBanner().then(res => {
      // console.log(res.banners)
      this.setState({
        ...this.state,
        banners: res.banners
      })
    }).catch( err => {
      console.log(err)
    })
  }

  render() {
    const { banners } = this.state
    return (
      <Fragment>
        <Header />
        <Banner banners = { banners }/>
      </Fragment>
    )
  }
}

export default Home