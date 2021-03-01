import React, { Component, Fragment } from 'react'
import Header from '../../components/header'
import SearchInput from './components/search-input'
import { getSearchSuggest } from '../../api/music'
class Search extends Component {
  componentDidMount () {
    getSearchSuggest('a').then(res => {
      console.log(res)
    })
  }
  render () {
    return (
      <Fragment>
        <Header />
        <SearchInput />
      </Fragment>    
    )
  }
}

export default Search