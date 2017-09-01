import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';

class App extends React.Component {
  constructor(props) {
      super(props);
    }
  render() {
    return(
      <div>
        <h1>Bagel Legend</h1>
        <Search />
        <h2>Top Bagels of All Time</h2>
        <h2>Most Popular Bagels of All Time</h2>

      </div>
    );
  }
}

export default App;
