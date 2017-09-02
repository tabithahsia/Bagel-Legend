import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';


class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        showLogin: false,
        showSignup: false
      };

      this.showLogin = this.showLogin.bind(this);
      this.showSignup = this.showSignup.bind(this);
    }

    showLogin() {
      this.setState({
        showLogin: true,
        showSignup: false
      });
    }

    showSignup() {
      this.setState({
        showLogin: false,
        showSignup: true
      });
    }


  render() {
    return (
      <div>
        <h1>Bagel Legend</h1>
        <Search />
        <button type="button" onClick={this.showLogin}>Login</button>
        <button type="button" onClick={this.showSignup}>Sign Up</button>


        { this.state.showLogin ? <Login /> : null }


        { this.state.showSignup ? <Signup /> : null }
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
