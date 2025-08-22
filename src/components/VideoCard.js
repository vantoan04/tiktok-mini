import React from "react";
import "./VideoCard.css";
import { HeartIcon, CommentIcon, SaveIcon, ShareIcon } from "./Cons";

function VideoCard({ src, likes, comments, shares }) {
  return (
    <div className="video-card">
      <div className="video-wrapper">
        <video className="video" src={src} controls loop autoPlay muted></video>
      </div>

      <div className="video-actions">
        <div className="action">
          <HeartIcon /> <p>{likes}</p>
        </div>
        <div className="action">
          <CommentIcon /> <p>{comments}</p>
        </div>
        <div className="action">
          <SaveIcon /> <p>Save</p>
        </div>
        <div className="action">
          <ShareIcon /> <p>{shares}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
