import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
  onInputChange(event) {
    this.setState({term: event.target.value.trim()});
  }
  onSubmitHandler(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }
  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className="input-group">
        <input placeholder="Get a five-day forecast in your favorite cities" className="form-control" value={this.state.term} onChange={this.onInputChange} type="text"/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispach) {
  return bindActionCreators({
    fetchWeather
  }, dispach);
}

export default connect(null, mapDispatchToProps)(SearchBar);
