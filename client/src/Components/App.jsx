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
        
      </div>
    );
  }
}

export default App;
