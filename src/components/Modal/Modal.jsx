import { Overlay, ModalStyle } from './Modal.styled';
import PropTypes from 'prop-types';

export function Modal({ closeModal, largeImg, tagImg }) {
  return (
    <Overlay
      onClick={e => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
    >
      <ModalStyle>
        <img src={largeImg} alt={tagImg} />
      </ModalStyle>
    </Overlay>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largeImg: PropTypes.string.isRequired,
  tagImg: PropTypes.string.isRequired,
};
