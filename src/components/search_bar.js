import React, {Component} from 'react';

class SearchBar extends Component {

  onInputChange(e) {
    console.log(e);
  }

  render() {
    return <input onChange={this.onInputChange} />;
  }
};

export default SearchBar;
