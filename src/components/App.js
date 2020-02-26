import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../apis/Youtube';

class App extends React.Component {
  onTermSubmit = term => {
    Youtube.get('/search', {
      params: {
        q: term
      }
    });
  };

  state = {};
  render() {
    return (
      <div className=" ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
