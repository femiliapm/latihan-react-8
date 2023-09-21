import "./card.css";

function Card(props) {
  const { imgProd, price, name } = props;

  return (
    <div className="card-container">
      <div className="image">
        <img src={imgProd} alt="img" />
        <p>{price}</p>
      </div>
      <div className="desc">
        <a href="#">
          <p>{name}</p>
        </a>
      </div>
    </div>
  );
}

export default Card;
