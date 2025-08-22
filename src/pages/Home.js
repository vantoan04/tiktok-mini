import React from "react";
import VideoCard from "../components/VideoCard";

function Home() {
  return (
    <div>
      <VideoCard
        src="/videos/demo4.mp4"
        likes="3m"
        comments="3K"
        shares="1m"
      />
      <VideoCard
        src="/videos/demo2.mp4"
        likes="90K"
        comments="1.5K"
        shares="200"
      />
    </div>
  );
}

export default Home;
