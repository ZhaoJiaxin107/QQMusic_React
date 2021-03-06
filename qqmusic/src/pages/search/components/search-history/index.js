import React, { Component } from 'react'
import { List } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import './style.css'

class searchHistory extends Component {
    render() {
        const { history, onSearchItemClick } = this.props
        return (
            <div className="search-history-container">
                <List
                    size="small"
                    dataSource={ history }
                    renderItem={item =>
                        <List.Item>
                            <div className = "search-list-item" onClick = {() => onSearchItemClick(item)}>
                                <SearchOutlined />
                                <span>{item}</span>
                            </div>
                        </List.Item>}
                />
            </div>
        )
    }
}

export default searchHistory