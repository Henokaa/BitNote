import React from 'react';
import './style/video.css';
import { Link } from "@reach/router";

const VideoItem = ({key, video, handleVideoSelect}) => {  
    console.log(); 
    return (                // handlevideoselect is found app.js     
        <Link to={`/dashboard/${video.id.videoId}`} className="pet">
         <hr/>   
        <div onClick={ () => handleVideoSelect(video)} className=' video-item item'>        
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
                <div className='header '>{video.snippet.title}</div>
            </div>
        
        </div> 
          
        </Link> 
    )
};
export default VideoItem;