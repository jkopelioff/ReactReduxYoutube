import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import VideoListItem from '../components/video_list_item';
import {selectVideo} from '../actions/index'; 

class VideoList extends Component {
  constructor(props) {
    super(props);

    this.renderVideoList = this.renderVideoList.bind(this);
  }

  renderVideoList() {
    return this.props.videos.map( (video) => {
      return <VideoListItem video={video} onVideoSelect={this.props.selectVideo} />
    });

  }

  render() {
    return (
        <ul className="col-md-4 list-group">
        {this.renderVideoList()}
        </ul>
      );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectVideo: selectVideo}, dispatch);
}

function mapStateToProps({videos}) {
  return { videos }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
