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
    const { imageKeyword, page, dataList } = this.state;

    if (prevState.imageKeyword !== imageKeyword || prevState.page !== page) {
      const KEY_WORD = imageKeyword;

      this.setState({ loading: true });
      const response = await Fetch(KEY_WORD, page);
      this.setState({ loading: false });

      !dataList
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
    const { loading, dataList } = this.state;

    return (
      <AppStyle>
        <Searchbar onSubmit={this.onSubmit} />
        <Loader isLoading={loading} />
        {dataList && <ImageGallery dataList={dataList} />}
        {dataList && (
          <Button onLoadMoreButtonClick={this.onLoadMoreButtonClick} />
        )}
      </AppStyle>
    );
  }
}
