import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }


  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <input type="text" name="username" className="Username" placeholder="Enter Username" onChange={(e) => this.setState({ username: e.target.value})}/>
        <input type="password" name="password" className="Password" placeholder="Enter Password" onChange={(e) => this.setState({ password: e.target.value})}/>
        <input type="submit" className="Submit" value="Submit" onClick={() => this.props.signupUsers(this.state)}/>
      </div>
    )
  }
}

export default Signup;
