import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

class DescriptionCard extends Component {
  render() {
    return (
      <Paper className="description-card shadow">
        <h3>
          <b>{this.props.title}</b>
        </h3>
        <p>{this.props.description}</p>
      </Paper>
    );
  }
}
export default DescriptionCard;
