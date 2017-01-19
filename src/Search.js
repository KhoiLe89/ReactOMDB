import React, { Component } from 'react';
import SearchContainer from './SearchContainer'
class Search extends Component {
  constructor(props){
    let searchTerm;
    super()
    this.state = {
      query: searchTerm
    }
  }
  searchFunction(e){
    this.setState({
      query: document.getElementById('input').value
    })
    console.log(this.state.query)
    e.preventDefault()
  }
  render() {
    return(
      <div className="searchContainer">
        <form>
          <input type="text" placeholder='Enter a movie title' id="input"></input>
          <button type="submit" onClick={(e) => this.searchFunction(e)}>Search</button>
        </form>
      </div>
    )
  }
}

export default Search;
