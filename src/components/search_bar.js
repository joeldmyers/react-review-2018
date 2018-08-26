import React, {Component} from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  onInputChange(e) {
    console.log(e);
  }

  render() {
    return <input onChange={this.onInputChange} />;
  }
};

export default SearchBar;
