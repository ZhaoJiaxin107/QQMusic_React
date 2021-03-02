import React, { Component } from 'react';
import { SearchOutlined, CloseCircleOutlined } from '@ant-design/icons'
import './style.css'
class SearchInput extends Component {
    constructor(props){
        super(props)
        this.onKeyUp = this.onKeyUp.bind(this)
    }
    // 判断是否点击了回车键
    onKeyUp (e) {
      // console.log(e.keyCode)
      if(e.keyCode === 13) {
        // 回车键，通知父组件触发搜索
        this.props.onSearch()
      }
    }
    render() {
        const { keyword, onKeywordChange, onClearKeyWord } = this.props
        return (
            <div className = "search-container">
                <div className = "input-container">
                    <SearchOutlined style = {{color:'#999'}} />
                    <input type = "text" value = {keyword} onChange = {onKeywordChange} className = "search-input" 
                    placeholder="请输入关键词" onKeyUp = {this.onKeyUp}/>
                    {keyword !== '' ? <CloseCircleOutlined style={{color: '#999'}} onClick = {onClearKeyWord}/> : ''}
                </div>
            </div>
        );
    }
}

export default SearchInput;