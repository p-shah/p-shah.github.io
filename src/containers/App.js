import React, { Component } from 'react';
import 'containers/App.css';
import MyNavbar from 'components/MyNavbar.js';
import Footer from 'components/Footer.js';
import About from 'components/About.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
