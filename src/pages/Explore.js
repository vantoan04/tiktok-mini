import React from "react";
import VideoCard from "../components/VideoCard";

function Home() {
  return (
    <div>
      <VideoCard
        src="/videos/demo3.mp4"
        likes="1m"
        comments="3K"
        shares="1k"
      />
      <VideoCard
        src="/videos/demo1.mp4"
        likes="80K"
        comments="1.2K"
        shares="300"
      />
    </div>
  );
}

export default Home;
