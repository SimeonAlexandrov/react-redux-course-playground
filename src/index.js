import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import SearchBar from './components/search_bar'
const API_KEY = 'AIzaSyA_wfWrAfZb_6odXPQ0lfzYBBEf3Q0FR4o';

YTSearch({key: API_KEY, term: 'dank memes'}, function(data) {
    console.log(data)
})

// Create  a new component and this component will produce HTML
class App extends Component {
    constructor(props) {
        super(props)
        
        this.state = { videos: []}
        
        YTSearch({key: API_KEY, term: 'dank memes'}, (videos) => {
            this.setState({videos})
        })
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={ this.state.videos[0] }/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}
// Take this component and put it on the page(in the DOM)
ReactDOM.render(<App/>,document.querySelector('.container'));