import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyle } from './ImageGallery.styled';

export function ImageGallery({ dataList }) {
  return (
    <ImageGalleryStyle>
      {dataList.map(dataItem => {
        return (
          <ImageGalleryItem
            largeImg={dataItem.largeImageURL}
            smallImg={dataItem.webformatURL}
            tagImg={dataItem.tags}
            key={dataItem.id}
          />
        );
      })}
    </ImageGalleryStyle>
  );
}
