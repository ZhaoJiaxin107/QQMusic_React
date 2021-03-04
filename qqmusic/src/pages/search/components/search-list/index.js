import React, { Component } from 'react'
import { List } from 'antd'
import './style.css'
class SearchList extends Component {
    render() {
        const { keywordList, keyword } = this.props
        return (
            <div className="search-list-container">
                <List
                    size="small"
                    header={<div className = "search-list-header">
                        搜索"{keyword}"
                        </div>}
                    dataSource={keywordList}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />
            </div>
        )
    }
}

export default SearchList