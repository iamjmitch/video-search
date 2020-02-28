import React from 'react';
// import VideoItem from './VideoItem';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  }
  var parser = new DOMParser();

  const youtubeVideoURL = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe
          title="Video Player"
          src={youtubeVideoURL}
          frameborder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="ui segment">
        <h4 className="header">
          {
            parser.parseFromString(video.snippet.title, 'text/html').body
              .innerHTML
          }
        </h4>
        <p className="">
          <b>Author: </b>
          <br />
          {video.snippet.channelTitle}
        </p>
        <p className="">
          <b>Video Description</b> <br />
          {video.snippet.description}
        </p>
      </div>
    </div>
  );
};

export default VideoDetail;
