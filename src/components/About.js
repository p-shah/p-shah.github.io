import React, { Component } from 'react';
import { Well } from 'react-bootstrap';

class About extends Component {
  render() {
    return(
      <div class="col-md-8">
        <h1 className="page-header">Welcome. <small>Happy to have you here!</small></h1>
        <Well className="description-card shadow">
          <h3><b>Market Yo Self! </b><small>(That's a Parks and Recs reference, just in case you didn't get it!)</small></h3>
          <p>I graduated from Drexel University in 2016 with a Bachelor's in Computer and Electrical Engineering. I am currently
          pursing my Master's in Computer Science at Villanova University. As a lifelong critic of tech, I want to push the envelope
          using data and design. In doing so, I strive to create clean and structured code with a purpose. Throughout my career so
          far, I have had the ability to develop an UI in AngularJS, build out RESTful APIs with Spring, write bash scripts using Hadoop
          on AWS.</p>
        </Well>
      </div>
    );
  }
}
export default About;
