import React, { Fragment } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path={`/`} component={HomePage} />
        {/* <Route exact path={`/hangman`} component={Form} /> */}
      </div>
    );
  }
}

export default App;
