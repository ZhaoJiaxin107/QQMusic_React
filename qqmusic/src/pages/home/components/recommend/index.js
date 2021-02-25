import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

class Recommend extends Component {
    render() {
        const { recommendMusic } = this.props
        // console.log(recommendMusic)
        return (
            <Fragment>
               <div className = "title">
                   <i></i>
                   推荐歌单
               </div>
               <div className = "recommend-list">
                   {recommendMusic.map(item => (
                       <Link to={'/list/' + item.id} className = "recommend-item" key = {item.id}>
                           <img src = {item.pic} alt = "recommendlist"/>
                           <div className = "name">{item.name}</div>
                       </Link>
                   ))
                   }
               </div>
            </Fragment>
        )
    }
}

export default Recommend