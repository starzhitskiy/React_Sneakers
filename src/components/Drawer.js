function Drawer({ onClose, items = [] }) {
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
      </div>
    </div>
  );
}

export default Drawer;
