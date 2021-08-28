import React from 'react';
import SearchBar from './Searchbar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoItem from './VideoItem';
import VideoDetail from './VideoDetail';
import { render } from "react-dom"
import Detail from "./Detail";
import { Router, Link } from "@reach/router"

class Yapp extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
        key: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })

        this.setState({
            videos: response.data.items
        })
        console.log("this is resp",response);
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})     // when video is selected go to the selected video iframe
    }

    Home = () => {
        return (
         <div className='ui container' style={{marginTop: '1em'}}>
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div className='ui grid'>
                    <div className="ui row">
                        <div className="two wide column">
                            {/* <VideoDetail video={this.state.selectedVideo}/> */}
                        </div>
                        <div className="eleven wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return(
            <Router>
            <this.Home path="/"/>
            <Detail path="dashboard/:keyy" />
          </Router>
        )
    }
}

export default Yapp;