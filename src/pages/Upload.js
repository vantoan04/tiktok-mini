import React from "react";

function Upload() {
  return (
    <div>
      <h1>Trang Tải lên</h1>
      <p>Tại đây bạn có thể tải video lên TikTok.</p>
      <form>
        <input type="file" accept="video/*" />
        <br />
        <button type="submit">Tải lên</button>
      </form>
    </div>
  );
}

export default Upload;
