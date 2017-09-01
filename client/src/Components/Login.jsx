import React from 'react';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <input type="text" name="username" className="Username" placeholder="Enter Username" onChange={(e) => this.setState({ username: e.target.value})}/>
        <input type="password" name="password" className="Password" placeholder="Enter Password"　onChange={(e) => this.setState({ password: e.target.value})}/>
        <input type="submit" className="Submit" value="Login" onClick={() => this.props.loginUser(this.state)}/>
      </div>
    )

  }
}

export default Login;
