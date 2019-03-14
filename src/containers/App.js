import React, { Component } from 'react';
import 'containers/App.css';
import Footer from 'components/Footer.js';
import About from 'components/About.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1 class="name">
            Priya <span class="green">Shah</span>
          </h1>
          <h4 class="">Software Engineer</h4>
        </div>
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
