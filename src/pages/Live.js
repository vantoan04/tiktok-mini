import React from "react";
import VideoCard from "../components/VideoCard";

function Home() {
  return (
    <div>
      <VideoCard
        src="/videos/demo5.mp4"
        likes="80K"
        comments="1.2K"
        shares="300"
      />
    </div>
  );
}

export default Home;
