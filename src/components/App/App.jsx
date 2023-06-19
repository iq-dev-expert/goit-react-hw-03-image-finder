import { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    imageKeyword: '',
  };

  onSubmit = imageKeyword => {
    this.setState({ imageKeyword });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery imageKeyword={this.state.imageKeyword} />
      </>
    );
  }
}
