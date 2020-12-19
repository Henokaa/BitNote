import React, { useState } from "react";

import YouTube from "react-youtube";
var getYouTubeID = require("get-youtube-id");

export default function Note() {
const [id, setid] = useState(" ");

function handleChange(e) {
  setid(getYouTubeID(e.target.value))
}

const opts = {
  height: '500',
  width: '830',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};

    return (
        <div className="APP">
          <input type="text" onChange={handleChange} required placeholder="URL..." />
          <YouTube videoId={id} opts={opts} />
        </div>
    )
}


