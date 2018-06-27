import React, { Component } from 'react';
import 'containers/App.css';
import shuffleboard from 'images/shuffleboard.PNG';
import MyNavbar from 'components/MyNavbar.js'
import IconBar from 'components/IconBar.js'
import Footer from 'components/Footer.js'
import About from 'components/About.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />
        <div class="row">
          <div class="col-md-4">
            <img className="img-responsive shadow" src={shuffleboard} alt="me"/>
            <IconBar></IconBar>
          </div>
          <About />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
