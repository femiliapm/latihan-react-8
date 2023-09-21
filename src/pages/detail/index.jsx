import { useParams } from "react-router-dom";
import "./detail.css";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const getProductById = useCallback(async () => {
    try {
      const res = await axios.get(
        `https://hplussport.com/api/products?id=${id}`
      );
      localStorage.setItem("idProduct", id);
      setProduct(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    getProductById();
  }, [getProductById]);

  return (
    <div className="detail-container">
      <div className="detail-img">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="detail-price">Rp {product.price}</div>
      <div className="detail-name" style={{ fontWeight: 700 }}>
        {product.name}
      </div>
      <div className="detail-desc">{product.description}</div>
    </div>
  );
};

export default DetailProduct;
