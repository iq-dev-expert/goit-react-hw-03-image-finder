import { ButtonStyle } from './Button.styled';

export function Button({ onLoadMoreButtonClick }) {
  return (
    <ButtonStyle type="button" onClick={onLoadMoreButtonClick}>
      Load more
    </ButtonStyle>
  );
}
