import { fn } from "moment";
import React, { useState } from "react";
import YouTube from "react-youtube";
import AddPost from "./AddPost";
import Post from "./Post";
import Posts from "./Posts";
var getYouTubeID = require("get-youtube-id");
var getYoutubeTitle = require('get-youtube-title');
var getYoutubeSubtitles = require('@joegesualdo/get-youtube-subtitles-node');

export default function Note() {
const [id, setid] = useState();
const [ytitle, setytitle] =  useState();
const [caption, setcaption] = useState('Transcription goes here');

let yttitle;
let videoId = 'q_q61B-DyPk'
function handleChange(e) {
  setid(getYouTubeID(e.target.value));
      getYoutubeTitle(getYouTubeID(e.target.value), function (err, title) {
        yttitle = setytitle(title);
         })
         getYoutubeSubtitles(videoId)
         .then(subtitles => {
           console.log(subtitles)
         })
         .catch(err => {
           console.log(err)
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
          rows="5" cols="76">
          {caption}
        </textarea>
        </div>
    )
}


