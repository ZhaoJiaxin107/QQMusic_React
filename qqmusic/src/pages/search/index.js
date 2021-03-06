import React, { Component, Fragment } from 'react'
import Header from '../../components/header'
import SearchInput from './components/search-input'
import SearchList from './components/search-list'
import HotSearch from './components/hot-search'
import SearchHistory from './components/search-history'
import { getSearchSuggest, getHotSearch } from '../../api/music'
import './style.css'
class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      keyword: '', // 搜索关键词
      keywordList: [], // 搜索列表
      showKeywordList: false,
      hotSearchList: [], // 热门搜索
      history: [] // 历史搜索记录
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
    // 处理历史搜索
    this.setHistorySearch()
  }

  setHistorySearch () {
    // 设置历史搜索, 把当前搜索的关键词(this.state.keyword)存储到本地存储(localStorage)
    // 倒序显示, 最新的搜索应该显示在列表的最前面 unshift
    // 判断当前的搜索关键词是否在历史搜索中
    // 如果不存在, 把搜索关键词添加到历史搜索的最前面
    // 如果存在, 把之前的关键词删除, 然后再把搜索关键词添加到历史搜索的最前面
    const { keyword } = this.state
    const history = JSON.parse(localStorage.getItem('history') || '[]')
    console.log(history, Array.isArray(history))
    const index = history.findIndex(item => item === keyword)
    if(index > -1){
      // 存在
      history.splice(index, 1)
      // keyword放在最前面
    }
    history.unshift(keyword)
    // console.log('history--------', history)
    // 把处理之后的历史搜索, 存储到本地存储
    localStorage.setItem('history', JSON.stringify(history))
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
    // 获取热门搜索
    getHotSearch().then(res => {
      console.log(res)
      this.setState({
        hotSearchList: res
      })
    })
    // 获取历史搜索
    const history = JSON.parse(localStorage.getItem('history') || '[]')
    this.setState({
      history
    })
  }

  render () {
    const { keyword, keywordList, showKeywordList, hotSearchList, history } = this.state
    return (
      <Fragment>
        <Header />
        <SearchInput keyword = {keyword} 
        onKeywordChange = {this.onKeywordChange}
        onClearKeyWord = {this.onClearKeyWord}
        onSearch = {this.onSearch} />
        <div className = "content">
          {showKeywordList ? <SearchList keywordList = {keywordList} keyword = {keyword} onSearchItemClick={this.onSearchItemClick}/>: ''}
          <HotSearch hotSearchList= {hotSearchList} onSearchItemClick={this.onSearchItemClick}/>
          <SearchHistory history = {history} onSearchItemClick={this.onSearchItemClick}/>
        </div>
      </Fragment>    
    )
  }
}

export default Search