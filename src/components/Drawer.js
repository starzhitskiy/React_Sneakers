function Drawer() {
  return (
    <div className="overlay" style={{ display: 'none' }}>
      <div className="drawer d-flex">
        <h2 className="mb-30 justify-between d-flex">
          Basket
          <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
        </h2>
        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              className="cartItemImg"
              style={{ backgroundImage: 'url(/img/sneakers/1.jpeg)' }}
            ></div>

            <div className="mr-20">
              <p className="mb-5">Men's shoes Nike Blazer Mid Suede</p>
              <p>800 $</p>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>

          <div className="cartItem d-flex align-center">
            <div
              className="cartItemImg"
              style={{ backgroundImage: 'url(/img/sneakers/1.jpeg)' }}
            ></div>

            <div className="mr-20">
              <p className="mb-5">Men's shoes Nike Blazer Mid Suede</p>
              <p>800 $</p>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
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
