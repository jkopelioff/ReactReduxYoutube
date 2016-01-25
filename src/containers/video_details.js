import React, {Component} from 'react';
import {connect} from 'react-redux';

class VideoDetail extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    if (!this.props.video) {
      return <div>Loading...</div>;
    }

    const videoId = this.props.video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{this.props.video.snippet.title}</div>
        <div>{this.props.video.snippet.description}</div>
      </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {video: state.activeVideo};
}

export default connect(mapStateToProps)(VideoDetail);
