function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer d-flex">
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
          <>
            <div className="items">
              {items.map((obj) => (
                <div className="cartItem d-flex align-center mb-20">
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
                  <b>1600 $</b>
                </li>
                <li>
                  <span>Taxes:</span>
                  <div></div>
                  <b>70 $</b>
                </li>
              </ul>
              <button className="greenButton">
                Сheckout
                <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </>
        ) : (
          <div className="cartEmpty d-flex align-center justyfy-content flex flex-column">
            <img
              className="mb-20"
              width="120px"
              height="120px"
              src="/img/empty-cart.jpeg"
              alt="img"
            />
            <h2>Basket Empty</h2>
            <p className="opacity-6">Add at least one item to place an order</p>
            <button onClick={onClose} className="greenButton">
              <img src="/img/arrow.svg" />
              Сome back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
