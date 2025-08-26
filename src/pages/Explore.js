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
      <VideoCard
        src="/videos/demo5.mp4"
        likes="8000"
        comments="300"
        shares="15"
      />
    </div>
  );
}

export default Home;
