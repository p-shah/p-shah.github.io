import React, { Component } from 'react';
import 'containers/App.css';
import Icon from 'components/Icon.js';

class IconBar extends Component {
  render() {
    const icons = [
      {
        name: 'email',
        link: 'mailto:pdshah6@gmail.com',
        image: require('images/envelope.svg')
      },
      {
        name: 'spotify',
        link:
          'https://open.spotify.com/user/122818050?si=vgec4TXTQ6Cq4_2ok1HoeA',
        image: require('images/spotify.svg')
      },
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/priya-shah-9a220949/',
        image: require('images/linkedin.svg')
      },
      {
        name: 'dribbble',
        link: 'https://dribbble.com/pdshah',
        image: require('images/dribbble.svg')
      },
      {
        name: 'resume',
        link: require('Resume.pdf'),
        image: require('images/document.svg')
      }
    ];

    return (
      <div className="icon-bar col-md-offset-2">
        {icons.map((icon, index) => {
          return <Icon key={index} {...icon} />;
        })}
      </div>
    );
  }
}
export default IconBar;
