import React, { useState } from 'react';
import styles from './Card.module.scss';

function Card({
  id,
  onFavorite,
  imageUrl,
  title,
  price,
  onPlus,
  favorited = false,
}) {
  const [isAdd, setIsAdd] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickPlus = () => {
    onPlus({ title, price, imageUrl });
    setIsAdd(!isAdd);
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, price, imageUrl });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img
          src={isFavorite ? '/img/liked.svg' : '/img/heart.svg'}
          alt="Unliked"
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers"></img>
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price</span>
          <b>{price} $</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          width={25}
          height={25}
          src={isAdd ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
          alt="PLus"
        ></img>
      </div>
    </div>
  );
}

export default Card;
