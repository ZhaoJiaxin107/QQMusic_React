import React, { Component, Fragment } from 'react'
import { List } from 'antd'
import { PlayCircleOutlined } from '@ant-design/icons'
import './style.css'
class NewSong extends Component {
    render() {
        const { newSong } = this.props
        return (
            <Fragment>
                <List
                    size="small"
                    header={<div className="title">
                             <i></i>
                             最新音乐
                            </div>}
                    dataSource={newSong}
                    renderItem={item => (
                        <List.Item>
                           <div className = "song-item">
                               <div className = "song-info">
                                   <h1 className = "song-name">{item.name}</h1>
                                   <p className = "song-desc">
                                     {item.singer.join(',')}&nbsp;{item.album.join()}
                                   </p>
                               </div>
                               <PlayCircleOutlined style = {{fontSize:'.2rem', color:'#999999'}}/>
                           </div>
                        </List.Item>
                    )}
                />
            </Fragment>
        )
    }
}

export default NewSong