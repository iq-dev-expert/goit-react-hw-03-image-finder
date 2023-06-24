import { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { Fetch } from 'utils/js/fetch';
import { AppStyle } from './App.styled';

export class App extends Component {
  state = {
    imageKeyword: '',
    page: 1,
    dataList: null,
    loading: false,
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.imageKeyword !== this.state.imageKeyword ||
      prevState.page !== this.state.page
    ) {
      const KEY_WORD = this.state.imageKeyword;

      this.setState({ loading: true });
      const response = await Fetch(KEY_WORD, this.state.page);
      this.setState({ loading: false });

      !this.state.dataList
        ? this.setState({ dataList: response })
        : this.setState(({ dataList }) => {
            return {
              dataList: [...dataList, ...response],
            };
          });
    }
  }

  onSubmit = imageKeyword => {
    this.setState({ imageKeyword, page: 1, dataList: null });
  };

  onLoadMoreButtonClick = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    return (
      <AppStyle>
        <Searchbar onSubmit={this.onSubmit} />
        <Loader isLoading={this.state.loading} />
        {this.state.dataList && <ImageGallery dataList={this.state.dataList} />}
        {this.state.dataList && (
          <Button onLoadMoreButtonClick={this.onLoadMoreButtonClick} />
        )}
      </AppStyle>
    );
  }
}
