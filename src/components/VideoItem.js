import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  var parser = new DOMParser();

  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={
          parser.parseFromString(video.snippet.title, 'text/html').body
            .innerHTML
        }></img>
      <div className="content">
        <div className="header">
          {/* title fix for title returning &quot etc */}
          {
            parser.parseFromString(video.snippet.title, 'text/html').body
              .innerHTML
          }
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
