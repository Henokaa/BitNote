import { fn } from "moment";
import React, { useState } from "react";
import YouTube from "react-youtube";
import AddPost from "./AddPost";
import Post from "./Post";
import Posts from "./Posts";
import Application from "./Application";
var getYouTubeID = require("get-youtube-id");
var getYoutubeTitle = require('get-youtube-title');
var getYoutubeSubtitles = require('@joegesualdo/get-youtube-subtitles-node');
var a;
export default function Detail(props) {
  let b = props.keyy;
  let t;
  let yttitle;
    getYoutubeTitle(`${b}`, function (err, title) {
    setytitle(title);
   }
   )
   console.log(t);
  
const [id, setid] = useState(b);
const [ytitle, setytitle] =  useState("Please insert URL");
const [caption, setcaption] = useState('Transcription goes here');
const [aevent, setaevent] = useState(" ");

let videoId = 'q_q61B-DyPk'
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
  a = event;
  setaevent(event.target.getCurrentTime());
  event.target.pauseVideo();
  console.log("hey"+event.target.getCurrentTime());
}
function aaevent() {
  setaevent(Math.floor(a.target.getCurrentTime()/60));
}
    return (
      <div className="wrapper">
      <div className="video">
        <div className="APP">
          <input type="text" onChange={handleChange} required placeholder="URL..." />
          <YouTube videoId={id} opts={opts} onReady={_onVeady}/>
          <label for="story">{ytitle}</label>
          {/* <button onClick={aaevent}>click</button>;
          {/* <h1>{b.toString().substring(0,2)}</h1> */} 
           {/* <Posts caption={caption}/>  */}
          <textarea id="story" name="story"
          rows="5" cols="76">
          {caption}
         </textarea>
        </div>

      </div>
      <Application caption={ytitle} aaevent={aaevent} aevent={aevent}/>
    </div>
    )
}


