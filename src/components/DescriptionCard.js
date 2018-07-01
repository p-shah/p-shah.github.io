import React, { Component } from 'react';
import { Well } from 'react-bootstrap';

class DescriptionCard extends Component {
  render() {
    return (
      <Well className="description-card shadow">
        <h3>
          <b>{this.props.title}</b>
        </h3>
        <p>{this.props.description}</p>
      </Well>
    );
  }
}
export default DescriptionCard;
