import React, { Component, Fragment } from 'react'
import Header from '../../components/header'
import SearchInput from './components/search-input'
import SearchList from './components/search-list'
import { getSearchSuggest } from '../../api/music'
import './style.css'
class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      keyword: '' // 搜索关键词
    }
    this.onKeywordChange = this.onKeywordChange.bind(this)
    this.onClearKeyWord = this.onClearKeyWord.bind(this)
    this.onSearch = this.onSearch.bind(this)
  }
  onKeywordChange (e) {
    const keyword = e.target.value
    // this.setState是异步函数
    this.setState({
      ...this.state,
      keyword
    },() => {
      // 回调函数, 当setState执行完成之后调用
      this.getSearchList(keyword)
    })
  }
  // 清空搜索框的内容
  onClearKeyWord () {
    this.setState({
      ...this.state,
      keyword: '',
      keywordList: [] // 搜索列表
    })
  }
  // 进行搜索
  onSearch () {
    console.log('Search', this.state.keyword)
  }

  getSearchList () {
    getSearchSuggest(this.state.keyword).then(res => {
      // console.log(res)
      this.setState({
        keywordList: res
      })
    })
  }
  componentDidMount () {
    // getSearchSuggest('a').then(res => {
    //   console.log(res)
    // })
  }

  render () {
    const { keyword, keywordList } = this.state
    return (
      <Fragment>
        <Header />
        <SearchInput keyword = {keyword} 
        onKeywordChange = {this.onKeywordChange}
        onClearKeyWord = {this.onClearKeyWord}
        onSearch = {this.onSearch} />
        <div className = "content">
          <SearchList keywordList = {keywordList}/>
        </div>
      </Fragment>    
    )
  }
}

export default Search