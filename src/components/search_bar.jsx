import React, { Component } from 'react';

class SearchBar extends Component {

  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="search-bar"
        placeholder="Search any city"
        onChange={this.handleUpdate}
        />
    );
  };
}

export default SearchBar;
