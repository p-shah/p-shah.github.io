import React, { Component } from 'react';
import 'containers/App.css';

class Icon extends Component {
  render() {
    return (
      <a href={this.props.link} rel="noopener noreferrer" target="_blank">
        <img className="icon" src={this.props.image} alt={this.props.name} />
      </a>
    );
  }
}
export default Icon;
