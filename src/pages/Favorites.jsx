import Card from '../components/Card/Card';
import React from 'react';
import AppContext from '../pages/context';

function Favorites() {
  const { favorites, onAddToFavorite } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>My favorites</h1>
      </div>
      <div className="d-flex flex-wrap">
        {favorites.map((item) => (
          <Card
            key={item.title}
            favorited={true}
            onFavorite={onAddToFavorite}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
