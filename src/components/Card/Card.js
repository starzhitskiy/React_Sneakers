import React, { useState } from 'react';
import styles from './Card.module.scss';
import ContentLoader from 'react-content-loader';
import AppContext from '../../pages/context';

function Card({
  id,
  onFavorite,
  imageUrl,
  title,
  price,
  onPlus,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, price, imageUrl });
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, price, imageUrl });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={3}
          width={180}
          height={200}
          viewBox="0 0 150 200"
          backgroundColor="#ededed"
          foregroundColor="#7a9a60"
        >
          <rect x="0" y="0" rx="9" ry="9" width="150" height="90" />
          <rect x="0" y="100" rx="0" ry="0" width="150" height="11" />
          <rect x="73" y="114" rx="0" ry="0" width="0" height="1" />
          <rect x="72" y="112" rx="0" ry="0" width="1" height="0" />
          <rect x="0" y="121" rx="0" ry="0" width="110" height="11" />
          <rect x="0" y="164" rx="0" ry="0" width="80" height="25" />
          <rect x="118" y="160" rx="11" ry="11" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && (
            <div className={styles.favorite} onClick={onClickFavorite}>
              <img
                src={isFavorite ? '/img/liked.svg' : '/img/heart.svg'}
                alt="Unliked"
              />
            </div>
          )}
          <img width={133} height={112} src={imageUrl} alt="Sneakers"></img>
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price</span>
              <b>{price} $</b>
            </div>
            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                width={25}
                height={25}
                src={
                  isItemAdded(id) ? '/img/btn-checked.svg' : '/img/btn-plus.svg'
                }
                alt="PLus"
              ></img>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
