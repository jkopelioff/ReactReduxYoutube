import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchVideos} from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {searchTerm : ""};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchVideos(this.state.searchTerm);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          className="form-control"
          value={this.state.searchTerm}
          placeholder="Search for something"
        onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>

      </form>
      );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchVideos}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
