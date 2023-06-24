import { Overlay, ModalStyle } from './Modal.styled';

export function Modal({ closeModal, largeImg, tagImg }) {
  return (
    <Overlay
      onClick={e => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
    >
      <ModalStyle className="modal">
        <img src={largeImg} alt={tagImg} />
      </ModalStyle>
    </Overlay>
  );
}
