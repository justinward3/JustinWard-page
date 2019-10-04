import React, { Component } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Paper from '@material-ui/core/Paper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <Footer />
      </div>
    );
  }
}

export default App;
