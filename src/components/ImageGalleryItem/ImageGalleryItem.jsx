import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import {
  ImageGalleryItemStyle,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onEscClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscClick);
  }

  onEscClick = e => {
    if (e.code === 'Escape') {
      this.closeModal();
    }
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { smallImg, tagImg, largeImg } = this.props;
    const { isModalOpen } = this.state;

    return (
      <>
        <ImageGalleryItemStyle onClick={this.openModal}>
          <ImageGalleryItemImage src={smallImg} alt={tagImg} />
        </ImageGalleryItemStyle>

        {isModalOpen && (
          <Modal
            closeModal={this.closeModal}
            largeImg={largeImg}
            tagImg={tagImg}
          />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = PropTypes.string.isRequired;
