import { fn } from "moment";
import React, { useState } from "react";

import YouTube from "react-youtube";
import AddPost from "./AddPost";
import Post from "./Post";
import Posts from "./Posts";
var getYouTubeID = require("get-youtube-id");
var getYoutubeTitle = require('get-youtube-title');

export default function Note() {
const [id, setid] = useState();
const [ytitle, setytitle] =  useState();

let yttitle;
function handleChange(e) {
  setid(getYouTubeID(e.target.value));
      getYoutubeTitle(getYouTubeID(e.target.value), function (err, title) {
        yttitle = setytitle(title);
         })
}
const opts = {
  height: '400',
  width: '800',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};

const _onVeady = (event) => {
  // access to player in all event handlers via event.target
  event.target.pauseVideo();
}

    return (
        <div className="APP">
          <input type="text" onChange={handleChange} required placeholder="URL..." />
          <YouTube videoId={id} opts={opts} onReady={_onVeady}/>
         
          <label for="story">{ytitle}</label>
          <textarea id="story" name="story"
          rows="5" cols="33">
It was a dark and stormy night...
</textarea>
        </div>
    )
}


