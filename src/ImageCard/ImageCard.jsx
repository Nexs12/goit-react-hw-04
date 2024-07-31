import s from "./ImageCard.module.css"

const ImageCard = ({ item, onClick }) => {
  return (
    <div className={s.image}>
      <img
        src={item.urls.small}
        alt={item.slug}
        onClick={() => onClick(item.urls.regular)}
        style={{ cursor: "pointer" }}
          />
            <p className={s.info}>Likes: {item.likes}</p>
            
    </div>
  );
};

export default ImageCard;