import React, { Component } from 'react';
import { SearchOutlined, CloseCircleOutlined } from '@ant-design/icons'
import './style.css'
class SearchInput extends Component {
    render() {
        const { keyword, onKeywordChange, onClearKeyWord } = this.props
        return (
            <div className = "search-container">
                <div className = "input-container">
                    <SearchOutlined style = {{color:'#999'}} />
                    <input type = "text" value = {keyword} onChange = {onKeywordChange} className = "search-input" placeholder="请输入关键词" />
                    {keyword !== '' ? <CloseCircleOutlined style={{color: '#999'}} onClick = {onClearKeyWord}/> : ''}
                </div>
            </div>
        );
    }
}

export default SearchInput;