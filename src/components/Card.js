function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart.svg" alt="Unliked" />
      </div>
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
          <img width={11} height={11} src="/img/plus.svg" alt="PLus"></img>
        </button>
      </div>
    </div>
  );
}

export default Card;
