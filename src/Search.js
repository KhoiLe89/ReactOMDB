import React, { Component } from 'react';
class Search extends Component {
  render() {
    let {searchFunction, query} = this.props
    return(
      <div className="searchContainer">
        <form>
          <input type="text" placeholder='Enter a movie title' id="input" value={query}></input>
          <button type="submit" onChange={(e)=> searchFunction(e)}>Search</button>
        </form>
      </div>
    )
  }
}

export default Search;
