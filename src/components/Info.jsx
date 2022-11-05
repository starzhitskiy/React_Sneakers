import React from 'react';
import AppContext from '../pages/context';

const Info = ({ image, title, description }) => {
  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className="cartEmpty d-flex align-center justyfy-content flex flex-column">
      <img className="mb-20" width="120px" src={image} alt="img" />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button onClick={() => setCartOpened(false)} className="greenButton">
        <img src="/img/arrow.svg" />
        Сome back
      </button>
    </div>
  );
};

export default Info;
