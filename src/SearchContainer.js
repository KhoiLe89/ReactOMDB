import React, { Component } from 'react'
import Search from './Search.js'

class SearchContainer extends Component {
  constructor(props){
    let searchTerm;
    super()
    this.state = {
      query: searchTerm,
      hasSearched: false;
    }
  }
  searchFunction(e){
    this.setState({
      query: document.getElementById('input').value
    })
    console.log(this.state.query)
    console.log("clicking")
    e.preventDefault()
  }
  render(){
    return (
        <Search
          query={this.state.query}
          searchFunction={(e) => this.searchFunction(e)} />
    )
  }
}

export default SearchContainer
