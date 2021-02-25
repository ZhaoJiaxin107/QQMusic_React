import React, { Component, Fragment } from 'react'
// 导入组件
import Header from '../../components/header'
import Banner from './components/banner'
import Recommend from './components/recommend'
// 引入接口文件
import { getBanner } from '../../api/banner'
import { getRecommendMusic } from '../../api/music'
class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      banners: [],  // 轮播图数据
      recommendMusic: [] // 推荐歌单
    }
  }
  componentDidMount() {

    // 用Promise.all返回多个Promise
    Promise.all([getBanner(), getRecommendMusic(6)]).then(([banners, recommendMusic]) => {
      console.log(recommendMusic)
      this.setState({
        ...this.state,
        banners: banners.map(item => ({ bannerId: item.bannerId, pic: item.pic })),
        recommendMusic: recommendMusic.map(item => ({ id: item.id, pic: item.picUrl, name: item.name }))
      })
    })
  }

  render() {
    const { banners, recommendMusic } = this.state
    return (
      <Fragment>
        <Header />
        <Banner banners={banners} />
        <Recommend recommendMusic={recommendMusic} />
      </Fragment>
    )
  }
}

export default Home