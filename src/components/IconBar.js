import React, { Component } from 'react';
import 'containers/App.css';
import linkedin from 'images/linkedin.svg';
import spotify from 'images/spotify.svg';
import mail from 'images/envelope.svg';
import resume from 'images/document.svg';
import dribbble from 'images/dribbble.svg';
import pdf from 'Resume.pdf';

class IconBar extends Component {
  render() {
    return (
      <div className="icon-bar col-md-offset-2">
        <a href="mailto:pdshah6@gmail.com">
          <img className="icon" src={mail} alt="gmail" />
        </a>
        <a
          href="https://open.spotify.com/user/122818050?si=vgec4TXTQ6Cq4_2ok1HoeA"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className="icon" src={spotify} alt="spotify" />
        </a>
        <a
          href="https://www.linkedin.com/in/priya-shah-9a220949/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className="icon" src={linkedin} alt="linkedin" />
        </a>
        <a
          href="https://dribbble.com/pdshah"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className="icon" src={dribbble} alt="dribbble" />
        </a>
        <a href={pdf} rel="noopener noreferrer" target="_blank">
          <img className="icon" src={resume} alt="resume" />
        </a>
      </div>
    );
  }
}
export default IconBar;
