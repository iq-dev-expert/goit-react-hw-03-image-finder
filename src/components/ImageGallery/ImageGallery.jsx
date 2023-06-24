import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export function ImageGallery({ dataList }) {
  console.log(dataList);
  return (
    <ul className="gallery">
      {dataList.map(dataItem => {
        return (
          <ImageGalleryItem
            smallImg={dataItem.webformatURL}
            tagImg={dataItem.tags}
            key={dataItem.id}
          />
        );
      })}
    </ul>
  );
}
