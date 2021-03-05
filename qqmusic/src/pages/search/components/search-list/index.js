import React, { Component } from 'react'
import { List } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import './style.css'
class SearchList extends Component {
    render() {
        const { keywordList, keyword, onSearchItemClick } = this.props
        return (
            <div className="search-list-container">
                <List
                    size="small"
                    header={<div className="search-list-header">
                        搜索"{keyword}"
                        </div>}
                    dataSource={keywordList}
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

export default SearchList