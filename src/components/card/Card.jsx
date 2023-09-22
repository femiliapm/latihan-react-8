import { Link } from "react-router-dom";
import "./card.css";
import PropTypes from "prop-types";

function Card(props) {
  const { id, imgProd, price, name } = props;

  return (
    <div className="card-container">
      <div className="image">
        <img src={imgProd} alt="img" />
        <p>{price}</p>
      </div>
      <div className="desc">
        {/* <Link to={`/product/${id}`}> */}
        <p>{name}</p>
        {/* </Link> */}
      </div>
      <div className="action d-flex justify-content-between">
        <Link to={`/product/${id}`}>See Detail</Link>
        <Link to={`/edit-product/${id}`}>Update Data</Link>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string,
  imgProd: PropTypes.string,
  price: PropTypes.string,
  name: PropTypes.string,
};

export default Card;
