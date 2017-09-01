import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';


class App extends React.Component {
  constructor(props) {
      super(props);
    }
  render() {
    return(
      <div>
        <h1>Bagel Legend</h1>
        <Search />
        <Login />
        <Signup />

        <div>
          <h2>Top Bagels of All Time</h2>

        </div>

        <div>
          <h2>Most Popular Bagels of All Time</h2>
        </div>

      </div>
    );
  }
}

export default App;
