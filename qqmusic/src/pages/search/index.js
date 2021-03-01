import React, { Component, Fragment } from 'react'
import Header from '../../components/header'
import SearchInput from './components/search-input'
import { getSearchSuggest } from '../../api/music'
class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      keyword: '' // 搜索关键词
    }
    this.onKeywordChange = this.onKeywordChange.bind(this)
    this.onClearKeyWord = this.onClearKeyWord.bind(this)
  }
  onKeywordChange (e) {
    const keyword = e.target.value
    this.setState({
      ...this.state,
      keyword
    })
  }
  // 清空搜索框的内容
  onClearKeyWord () {
    this.setState({
      ...this.state,
      keyword: ''
    })
  }
  componentDidMount () {
    // getSearchSuggest('a').then(res => {
    //   console.log(res)
    // })
  }

  render () {
    const { keyword } = this.state
    return (
      <Fragment>
        <Header />
        <SearchInput keyword = {keyword} 
        onKeywordChange = {this.onKeywordChange}
        onClearKeyWord = {this.onClearKeyWord}/>
      </Fragment>    
    )
  }
}

export default Search