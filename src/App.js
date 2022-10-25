import React from 'react';
import './index.scss';

function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center ">
          <img width={70} height={70} src="/img/logo.jpeg" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Best sneaker store</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={20} height={20} src="/img/cart.svg" />
            <span>1274$</span>
          </li>
          <li>
            <img width={20} height={20} src="/img/user.svg" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">All Shoes</h1>

        <div className="d-flex">
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/1.jpeg"
              alt="Sneakers"
            ></img>
            <h5>Men's shoes Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price</span>
                <b>800 $</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="PLus"
                ></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/2.jpeg"
              alt="Sneakers"
            ></img>
            <h5>Men's shoes Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price</span>
                <b>800 $</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="PLus"
                ></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/3.jpeg"
              alt="Sneakers"
            ></img>
            <h5>Men's shoes Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price</span>
                <b>800 $</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="PLus"
                ></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/4.jpeg"
              alt="Sneakers"
            ></img>
            <h5>Men's shoes Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price</span>
                <b>800 $</b>
              </div>
              <button className="button">
                <img
                  width={11}
                  height={11}
                  src="/img/plus.svg"
                  alt="PLus"
                ></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
