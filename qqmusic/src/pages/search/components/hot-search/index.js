import React, { Component} from 'react'
import './style.css'
class HotSearch extends Component {
    render () {
        const { hotSearchList, onSearchItemClick } = this.props
        return (
            <div className="hot-search-container">
                <div className="hot-search-title">
                 热门搜索
                </div>
                <ul className="hot-search-list">
                  {hotSearchList.map((item, index) => (
                      <li className="hot-search-item"
                      onClick = {()=>onSearchItemClick(item)}
                      key={index}>{item}</li>
                  ))}
                </ul>
            </div>
        )
    }
}

export default HotSearch