export function ImageGalleryItem({ smallImg, tagImg }) {
  return (
    <li className="gallery-item">
      <img src={smallImg} alt={tagImg} />
    </li>
  );
}
