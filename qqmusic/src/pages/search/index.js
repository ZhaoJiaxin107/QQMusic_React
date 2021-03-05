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
    this.onSearchItemClick = this.onSearchItemClick.bind(this)
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
  // 清空搜索框的结果并隐藏
  onClearKeyWord () {
    this.setState({
      ...this.state,
      keyword: '',
      keywordList: [], // 搜索列表
      showKeywordList: false // 即将要显示搜索结果组件，所以需要隐藏搜索列表
    })
  }
  // 进行搜索
  onSearch () {
    console.log('Search', this.state.keyword)
    this.setState({
      showKeywordList: false // 即将要显示搜索结果组件，所以需要隐藏搜索列表
    })
  }

  getSearchList () {
    if(this.state.keyword === ''){
      // 如果搜索关键词为空, 就不需要调用接口
      // 清空搜索列表的数据
      this.setState({
        keywordList: [],
        showKeywordList: false
      })
      return
    }
    getSearchSuggest(this.state.keyword).then(res => {
      // console.log(res)
      this.setState({
        keywordList: res,
        showKeywordList: true // 获取搜索页面, 显示结果
      })
    })
  }

  // 点击搜索列表的项, 改变keyword的值, 然后触发搜索功能
  onSearchItemClick (value) {
    console.log("on search item click", value)
    this.setState({
      keyword: value
    }, () => {
      // 当keyword设置成功之后, 调用搜索
      this.onSearch()
    })
  }
  componentDidMount () {
    // getSearchSuggest('a').then(res => {
    //   console.log(res)
    // })
  }

  render () {
    const { keyword, keywordList, showKeywordList } = this.state
    return (
      <Fragment>
        <Header />
        <SearchInput keyword = {keyword} 
        onKeywordChange = {this.onKeywordChange}
        onClearKeyWord = {this.onClearKeyWord}
        onSearch = {this.onSearch} />
        <div className = "content">
          {showKeywordList !== '' ? <SearchList keywordList = {keywordList} keyword = {keyword} onSearchItemClick={this.onSearchItemClick}/>: ''}
        </div>
      </Fragment>    
    )
  }
}

export default Search