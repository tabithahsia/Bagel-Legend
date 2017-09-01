import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';


class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        showLogin: false
      }
    }
  render() {
    return(
      <div>
        <h1>Bagel Legend</h1>
        <Search />
        <button type="button">Login</button>

        { this.state.showLogin ? <Login /> : null }

        <button type="button">Sign Up</button>

        { this.state.showLogin ? <Signup /> : null }
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
