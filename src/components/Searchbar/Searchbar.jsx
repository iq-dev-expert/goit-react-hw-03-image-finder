import { Component } from 'react';
import {
  SearchbarStyle,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';
import { PiMagnifyingGlassBold } from 'react-icons/pi';

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
      <SearchbarStyle>
        <SearchForm onSubmit={this.onFormSubmit}>
          <SearchFormButton type="submit">
            <span>
              <PiMagnifyingGlassBold />
            </span>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.onInputChange}
          />
        </SearchForm>
      </SearchbarStyle>
    );
  }
}
