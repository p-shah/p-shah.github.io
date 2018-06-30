import React, { Component } from 'react';
import { Well } from 'react-bootstrap';
import IconBar from 'components/IconBar.js';
import me from 'images/me.png';

class About extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <img className="img-responsive shadow" src={me} alt="me" />
          <IconBar />
        </div>
        <div className="col-md-8">
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
              lifelong critic of technology, I enjoy experimenting with the
              latest and greatest. I want to push the envelope using data and
              design. In doing so, I strive to create clean and structured code
              with a purpose. Throughout my career, I have had theability to
              develop an UI in AngularJS, build out RESTful APIs with Spring,
              and write bash scripts using Hadoop on AWS.
            </p>
          </Well>
        </div>
      </div>
    );
  }
}
export default About;
