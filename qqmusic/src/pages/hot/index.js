import React, { Component, Fragment } from 'react'
import { List } from 'antd'
import { Link } from 'react-router-dom'
import { PlayCircleOutlined } from '@ant-design/icons'
import Header from '../../components/header'
import { getHotSong } from '../../api/music'
import './style.css'
// 引入公共方法
function mergeSong(songList) {
  const res = []
  songList.forEach(item => {
    res.push({
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
      list: []
    }
  }
  componentDidMount() {
    getHotSong().then(res => {
      console.log(res)
      this.setState({
        list: mergeSong(res.list)
      })
    })
  }
  render() {
    return (
      <Fragment>
        <Header />
        <List
          size="small"
          dataSource={this.state.list}
          renderItem={item => (
            <List.Item>
              <Link to={"/play/" + item.id} className="song-item">
                <div className="song-info">
                  <h1 className="song-name">{item.name}</h1>
                  <p className="song-desc">
                    {item.singer.join(",")}&nbsp;
                    {item.album}
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
