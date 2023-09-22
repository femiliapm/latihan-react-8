import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormProduct from "../../components/formAddEditProduct/FormProduct";
import LayoutV1 from "../../layouts/v1";
import { getProductsById, updateProduct } from "../../services/product";

const EditProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [imgTitle, setImgTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [desc, setDesc] = useState("");

  const { id } = useParams();

  const navigate = useNavigate();

  const updateData = async (e) => {
    try {
      e.preventDefault();

      const data = {
        name,
        price,
        image_title: imgTitle,
        image: imgUrl,
        description: desc,
      };

      const response = await updateProduct(id, data);
      console.log(response);
      alert(response.data);
      setDesc("");
      setImgTitle("");
      setImgUrl("");
      setName("");
      setPrice(0);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = async (idProduct) => {
    try {
      // find data berdasarkan id yg dikirim
      const response = await getProductsById(idProduct);
      console.log(response);
      const data = response.data[0];
      setDesc(data.description);
      setImgTitle(data.imageTitle);
      setImgUrl(data.image);
      setName(data.name);
      setPrice(data.price);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductById(id);
  }, [id]);

  return (
    <LayoutV1>
      <h2>Edit Product</h2>
      <FormProduct
        name={name}
        price={price}
        imgTitle={imgTitle}
        imgUrl={imgUrl}
        desc={desc}
        onChangeName={(e) => setName(e.target.value)}
        onChangePrice={(e) => setPrice(e.target.value)}
        onChangeImgTitle={(e) => setImgTitle(e.target.value)}
        onChangeImageUrl={(e) => setImgUrl(e.target.value)}
        onChangeDesc={(e) => setDesc(e.target.value)}
      />
      <button className="btn btn-success" onClick={(e) => updateData(e)}>
        Update
      </button>
    </LayoutV1>
  );
};

export default EditProduct;
