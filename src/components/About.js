import React, { Component } from 'react';
import IconBar from 'components/IconBar.js';
import DescriptionCard from 'components/DescriptionCard.js';
import me from 'images/me.png';

class About extends Component {
  render() {
    const cards = [
      {
        title: 'About Me.',
        description: `I graduated from Drexel University in 2016 with a Bachelor's
        in Computer and Electrical Engineering. I am currently pursuing my
        Master's in Computer Science at Villanova University. As a
        lifelong critic of technology, I enjoy experimenting with the
        latest and greatest. I want to push the envelope using data and
        design. In doing so, I strive to create clean and structured code
        with a purpose.`
      }
    ];

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
          {cards.map((card, index) => {
            return <DescriptionCard key={index} {...card} />;
          })}
        </div>
      </div>
    );
  }
}
export default About;
