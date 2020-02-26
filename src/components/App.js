import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../apis/Youtube';

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async term => {
    const response = await Youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className=" ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />I have{' '}
        {this.state.videos.length} Videos
      </div>
    );
  }
}

export default App;
