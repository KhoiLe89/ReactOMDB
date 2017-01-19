import React, { Component }, from 'react'
import Search from './Search.js'

class SearchContainer extends Component {


  render(){
    return (
      <div>
        <Search input={props.input}/>
      </div>
    )
  }
}

export default SearchContainer
