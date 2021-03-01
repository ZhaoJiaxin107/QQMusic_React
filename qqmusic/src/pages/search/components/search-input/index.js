import React, { Component } from 'react';
import { SearchOutlined, CloseCircleOutlined } from '@ant-design/icons'
import './style.css'
class SearchInput extends Component {
    render() {
        return (
            <div className = "search-container">
                <div className = "input-container">
                    <SearchOutlined style = {{color:'#999'}} />
                    <input type = "text" className = "search-input" placeholder="请输入关键词" />
                    <CloseCircleOutlined style={{color: '#999'}} />
                </div>
            </div>
        );
    }
}

export default SearchInput;