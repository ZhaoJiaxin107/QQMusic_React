import React, { Component, Fragment } from 'react'
// 导入组件
import Header from '../../components/header'
import Banner from './components/banner'
import Recommend from './components/recommend'
import NewSong from './components/newSong'
// 引入接口文件
import { getBanner } from '../../api/banner'
import { getRecommendMusic, getNewSong } from '../../api/music'
// 引入公共方法
function mergeSong(songList) {
  const res = []
  songList.forEach(item => {
    res.push({
      id: item.id,
      name: item.name,
      singer: item.song.artists.map(item => item.name),
      album: item.song.alias
    })
  })
  return res
}
class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      banners: [],  // 轮播图数据
      recommendMusic: [], // 推荐歌单
      newSong: [] // 推荐新歌
    }
  }
  componentDidMount() {

    // 用Promise.all返回多个Promise
    Promise.all([getBanner(),
    getRecommendMusic(6),
    getNewSong()]).then(([banners, recommendMusic, newSong]) => {
      // console.log(newSong)
      // console.log(mergeSong(newSong))
      this.setState({
        ...this.state,
        banners: banners.map(item => ({ bannerId: item.bannerId, pic: item.pic })),
        recommendMusic: recommendMusic.map(item => ({ id: item.id, pic: item.picUrl, name: item.name })),
        newSong: mergeSong(newSong)
      })
    })
  }

  render() {
    const { banners, recommendMusic, newSong } = this.state
    return (
      <Fragment>
        <Header />
        <Banner banners={banners} />
        <Recommend recommendMusic={recommendMusic} />
        <NewSong newSong = {newSong}/>
      </Fragment>
    )
  }

}

export default Home