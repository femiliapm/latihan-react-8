import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LayoutV1 from "../../layouts/v1";
import "./detail.css";
import { deleteProduct, getProductsById } from "../../services/product";

const DetailProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const getProductById = useCallback(async () => {
    try {
      const res = await getProductsById(id);
      localStorage.setItem("idProduct", id);
      setProduct(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    getProductById();
  }, [getProductById]);

  // bisa tambahkan konfirmasi sebelum benar2 dihapus
  const deleteProductById = async (e) => {
    try {
      e.preventDefault();

      const res = await deleteProduct(id);
      console.log(res);
      alert(res.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutV1>
      <div className="detail-container">
        <div className="detail-img">
          <img
            src={
              product?.image ||
              "https://images.unsplash.com/photo-1515037893149-de7f840978e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1388&q=80"
            }
            alt={product?.name || "Brownies"}
          />
        </div>
        <div className="detail-price">Rp {product?.price || 100000}</div>
        <div className="detail-name" style={{ fontWeight: 700 }}>
          {product?.name || "Brownies"}
        </div>
        <div className="detail-desc">
          {product?.description || "Brownies homemade yang enak sekali~"}
        </div>

        <button
          className="btn btn-danger mt-3"
          onClick={(e) => deleteProductById(e)}
        >
          Delete
        </button>
      </div>
    </LayoutV1>
  );
};

export default DetailProduct;
