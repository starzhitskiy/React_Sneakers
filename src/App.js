import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Drawer from './components/Drawer';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import './index.scss';

const arr = [];

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    // fetch('https://63628e1b66f75177ea32a8f1.mockapi.io/items').then(
    //   (respons) => {
    //     return respons.json().then((json) => {
    //       setItems(json);
    //     });
    //   }
    // );

    axios
      .get('https://63628e1b66f75177ea32a8f1.mockapi.io/items')
      .then((respons) => {
        setItems(respons.data);
      });
    axios
      .get('https://63628e1b66f75177ea32a8f1.mockapi.io/cart')
      .then((respons) => {
        setCartItems(respons.data);
      });
    axios
      .get('https://63628e1b66f75177ea32a8f1.mockapi.io/favorites')
      .then((respons) => {
        setCartItems(respons.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://63628e1b66f75177ea32a8f1.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://63628e1b66f75177ea32a8f1.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://63628e1b66f75177ea32a8f1.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          'https://63628e1b66f75177ea32a8f1.mockapi.io/favorites',
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Failed to add to favorites');
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              items={items}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
        />
        <Route
          path="/favorites"
          exact
          element={
            <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
          }
        />
      </Routes>

      {/* dddd */}
    </div>
  );
}

export default App;
