import React from "react";

class SearchBar extends React.Component {
  state = { term: "cars" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  formOnSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui container searchbar">
        <form className="ui form" onSubmit={this.formOnSubmit}>
          <div className="field">
            <label>Search Video</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
