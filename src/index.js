import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCpnK1GGLSVVvFJ-u2BOuUe0ZJwZ28hfsc';



// Create a new component.
// This component should produce some html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'chess'}, (videos_array) => {
      this.setState({ videos: videos_array}); // trumpiau: videos: videos ----> videos (kai pavinimai sutmapa)
    })
  }

  render() { //butinas render and return jsx klasei
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}


// Take this component's generated HTML and put
// on the page (in the ?DOM?)
ReactDom.render(<App />, document.querySelector('.container'));
