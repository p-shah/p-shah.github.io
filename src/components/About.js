import React, { Component } from 'react';
import { Well } from 'react-bootstrap';
import IconBar from 'components/IconBar.js';
import shuffleboard from 'images/shuffleboard.PNG';

class About extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-md-4">
          <img className="img-responsive shadow" src={shuffleboard} alt="me" />
          <IconBar />
        </div>
        <div class="col-md-8">
          <h1 className="page-header">
            Welcome. <small>Happy to have you here!</small>
          </h1>
          <Well className="description-card shadow">
            <h3>
              <b>About Me.</b>
            </h3>
            <p>
              I graduated from Drexel University in 2016 with a Bachelor's in
              Computer and Electrical Engineering. I am currently pursing my
              Master's in Computer Science at Villanova University. As a
              lifelong critic of tech, I want to push the envelope using data
              and design. In doing so, I strive to create clean and structured
              code with a purpose. Throughout my career so far, I have had the
              ability to develop an UI in AngularJS, build out RESTful APIs with
              Spring, write bash scripts using Hadoop on AWS.
            </p>
          </Well>
        </div>
      </div>
    );
  }
}
export default About;
