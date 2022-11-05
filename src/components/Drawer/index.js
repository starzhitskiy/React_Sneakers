import React, { useState } from 'react';
import axios from 'axios';

import Info from '../Info';
import { useCustomCart } from '../hooks/useCustomCart';

import styles from './Drawer.module.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [], opened }) {
  const { cartItems, setCartItems, totalPrice } = useCustomCart();
  const [orderId, setOrderId] = useState(null);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        'https://63628e1b66f75177ea32a8f1.mockapi.io/orders',
        {
          items: cartItems,
        }
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('/cart/' + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert('Error creating order :((');
    }
    setIsLoading(false);
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={styles.drawer}>
        <h2 className="mb-30 justify-between d-flex">
          Basket
          <img
            onClick={onClose}
            className="removeBtn"
            src="/img/btn-remove.svg"
            alt="Close"
          />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items flex">
              {items.map((obj) => (
                <div
                  key="obj.id"
                  className="cartItem d-flex align-center mb-20"
                >
                  <div
                    className="cartItemImg"
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                  ></div>

                  <div className="mr-20">
                    <p className="mb-5">{obj.title}</p>
                    <p>{obj.price} $</p>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Total:</span>
                  <div></div>
                  <b>{totalPrice} $</b>
                </li>
                <li>
                  <span>Taxes 5%:</span>
                  <div></div>
                  <b>{((totalPrice / 100) * 5).toFixed(1)} $</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenButton"
              >
                Сheckout
                <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? 'Order is processed' : 'Basket Empty'}
            description={
              isOrderComplete
                ? `Your order number: № ${orderId}`
                : 'Add at least one item to place an order'
            }
            image={
              isOrderComplete
                ? '/img/complete-order.jpeg'
                : '/img/empty-cart.jpeg'
            }
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
