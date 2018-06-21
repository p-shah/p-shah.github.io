import React, { Component } from 'react';
import 'containers/App.css';
import linkedin from 'images/linkedin.svg';
import spotify from 'images/spotify.svg';
import google from 'images/google.svg'

class IconBar extends Component {
  render() {
    return(
      <div className="icon-block col-md-offset-4">
        <a href="mailto:pdshah6@gmail.com"><img className="icon" src={google} alt="google"/></a>
        <a href="https://open.spotify.com/user/122818050?si=vgec4TXTQ6Cq4_2ok1HoeA" target="_blank"><img className="icon" src={spotify} alt="spotify"/></a>
        <a href="https://www.linkedin.com/in/priya-shah-9a220949/" target="_blank"><img className="icon" src={linkedin} alt="linkedin"/></a>
      </div>
    );
  }
}
export default IconBar;
