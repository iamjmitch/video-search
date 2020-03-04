import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Youtube from '../apis/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
// import VideoItem from './VideoItem';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onTermSubmit = async term => {
    const response = await Youtube.get('/search', {
      params: {
        q: term
      }
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const onVideoSelect = video => {
    setSelectedVideo(video);
  };

  useEffect(() => {
    onTermSubmit('react js tutorials');
  }, []);

  return (
    <div className=" ui container" style={{ marginTop: '20px' }}>
      <SearchBar onTermSubmit={onTermSubmit} />
      <div className="ui stackable grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
