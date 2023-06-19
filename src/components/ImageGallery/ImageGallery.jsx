// import axios from 'axios';
import { Component } from 'react';
import { fetch } from 'utils/js/fetch';

export class ImageGallery extends Component {
  state = {
    data: null,
  };

  async componentDidUpdate(prevProps, _) {
    if (prevProps.imageKeyword !== this.props.imageKeyword) {
      const KEY_WORD = this.props.imageKeyword;

      const response = await fetch(KEY_WORD);

      this.setState({ data: response });
    }
  }

  render() {
    return (
      <>
        {this.state.data &&
          this.state.data.map(item => {
            return (
              <img
                src={item.webformatURL}
                alt={this.props.imageKeyword}
                key={item.id}
              />
            );
          })}
      </>
    );
  }
}
