import React, { Component } from 'react';

class SearchBar extends Component{
  render() { //butinas render and return jsx klasei
    return <input onChange={(event) => console.log(event.target.value)}/>;
  }
}
export default SearchBar;
