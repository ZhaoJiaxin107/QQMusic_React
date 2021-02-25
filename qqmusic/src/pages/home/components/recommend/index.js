import React, { Component, Fragment } from 'react'
import './style.css'

class Recommend extends Component {
    render() {
        const { recommendMusic } = this.props
        console.log(recommendMusic)
        return (
            <Fragment>
               <div className = "title">
                   <i></i>
                   推荐歌单
               </div>
               <div className = "recommend-list">
                   {recommendMusic.map(item => (
                       <div className = "recommend-item" key = {item.id}>
                           <img src = {item.pic} alt = "recommendlist"/>
                           <div className = "name">{item.name}</div>
                       </div>
                   ))
                   }
               </div>
            </Fragment>
        )
    }
}

export default Recommend