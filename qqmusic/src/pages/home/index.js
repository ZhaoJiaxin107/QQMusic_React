import React, { Component, Fragment } from 'react'
// 导入组件
import Header from '../../components/header'
import Banner from './components/banner'
// 引入接口文件
import { getBanner } from '../../api/banner'
import { getRecommendMusic } from '../../api/music'
class Home extends Component {

  constructor (props) {
    super(props)
    this.state = {
      banners: []
    }
  }
  componentDidMount () {
    // 获取轮播图数据
    getBanner().then(res => {
      // console.log(res.banners)
      this.setState({
        ...this.state,
        banners: res
      })
    }).catch( err => {
      console.log(err)
    })
    // 获取推荐歌单
    getRecommendMusic(9).then(res => {
      console.log(res)
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