import React, { Component } from 'react';
import Search from '../components/search';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actions from './../../actions';

class SearchContainer extends Component {
  state = {
    value: 'Luis Fonsi'
  }
  
  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.input.value, 'submit');

    // this.props.dispatch(searchEntities(this.input.value));
    // this.props.actions.searchEntities(this.input.value);
    this.props.actions.searchAsyncEntities(this.input.value);
  }

  setInputRef = element => {
    this.input = element;
  }
  handleInputChange = event => {
    this.setState({
      value: event.target.value
    })
  }
  render() {
    return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
};

export default connect(null, mapDispatchToProps)(SearchContainer);
