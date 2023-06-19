import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  onInputChange = e => {
    this.setState({ inputValue: e.target.value.toLowerCase() });
  };

  onFormSubmit = e => {
    e.preventDefault();

    if (this.state.inputValue.trim() === '') {
      alert('Enter a search query');
      return;
    }

    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.onFormSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.onInputChange}
          />
        </form>
      </header>
    );
  }
}
