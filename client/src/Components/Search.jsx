import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      query: ''
    }
  }
  render() {
    return (
      <div>
        <input type="text" name="search" placeholder="Search" value={this.state.query} onChange={(e) => this.setState({ query: e.target.value })} />
        <input type="submit" value="Submit"/>
      </div>
    )
  }
}


export default Search;
