import { Link, lLnk } from 'react-router-dom';

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center ">
          <img width={70} height={70} src="/img/logo.jpeg" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Best sneaker store</p>
          </div>
        </div>
      </Link>

      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={20} height={20} src="/img/cart.svg" alt="basket" />
          <span>1274$</span>
        </li>
        <li>
          <Link to="/favorites">
            <img width={20} height={20} src="/img/heart.svg" alt="bookmarks" />
          </Link>
        </li>
        <li>
          <img width={20} height={20} src="/img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
