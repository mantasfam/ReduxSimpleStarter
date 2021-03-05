import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCpnK1GGLSVVvFJ-u2BOuUe0ZJwZ28hfsc';



// Create a new component.
// This component should produce some html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('digimons');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos_array) => {
      this.setState({
        videos: videos_array,
        selectedVideo: videos_array[0]}); // trumpiau: videos: videos ----> videos (kai pavinimai sutmapa)
    })
  }

  render() { //butinas render and return jsx klasei
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    )
  }
}


// Take this component's generated HTML and put
// on the page (in the ?DOM?)
ReactDom.render(<App />, document.querySelector('.container'));
