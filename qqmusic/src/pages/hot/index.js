import React, { Component, Fragment } from 'react'
import { Image } from 'antd';
import { List } from 'antd'
import { Link } from 'react-router-dom'
import { PlayCircleOutlined } from '@ant-design/icons'
import Header from '../../components/header'
import { getHotSong } from '../../api/music'
import './style.css'
// 引入公共方法
function mergeSong(songList) {
  const res = []
  songList.forEach((item, index) => {
    res.push({
      index: index + 1, 
      id: item.id,
      name: item.name,
      singer: item.artists.map(item => item.name),
      album: item.album.name
    })
  })
  return res
}

class Hot extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      info: {}
    }
  }
  componentDidMount() {
    getHotSong().then(res => {
      console.log(res.info)
      this.setState({
        list: mergeSong(res.list),
        info: res.info
      })
    })
  }
  render() {
    return (
      <Fragment>
        <Header />
        <div className = "banner">
          <Image
            width = '3.75rem'
            height = "1.5rem"
            src = {this.state.info.img}
          />
          <span className = "title">{this.state.info.name}</span>
          <span className = "time">更新日期:{this.state.info.month}月{this.state.info.day}日</span>
        </div>
        <List
          size="small"
          dataSource={this.state.list}
          renderItem={item => (
            <List.Item>
              <Link to={"/play/" + item.id} className="song-item">
                <span className = "song-index">{item.index / 10 < 1 ? '0' + item.index : item.index}</span>
                <div className="song-info">
                  <h1 className="song-name">{item.name}</h1>
                  <p className="song-desc">
                    {item.singer.join("/")}&nbsp;
                    {item.album ? '-' + item.album : ''}
                  </p>
                </div>
                <PlayCircleOutlined style={{ fontSize: '.2rem', color: '#999999' }} />
              </Link>
            </List.Item>
          )}
        />
      </Fragment>
    )
  }
}

export default Hot
