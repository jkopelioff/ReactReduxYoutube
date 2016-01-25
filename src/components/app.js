import React from 'react';
import { Component } from 'react';
import SearchBar from '../containers/search_bar';
import VideoDetail from '../containers/video_details';
import VideoList from '../containers/video_list';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }


  render() {
    return (
      <div>
        <SearchBar/>
        <div>
          <VideoDetail/>
          <VideoList/>
        </div>
      </div>
      );
  }
}
