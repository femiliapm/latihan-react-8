import { useState } from "react";
import LayoutV1 from "../../layouts/v1";
import { addProduct } from "../../services/product";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [imgTitle, setImgTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [desc, setDesc] = useState("");

  const saveData = async (e) => {
    try {
      e.preventDefault();

      const data = {
        name,
        price,
        image_title: imgTitle,
        image: imgUrl,
        description: desc,
      };

      console.log(data);

      const res = await addProduct(data);

      console.log(res);
      alert(res.data);
      setDesc("");
      setImgTitle("");
      setImgUrl("");
      setName("");
      setPrice(0);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <LayoutV1>
      <h2>Add Product</h2>
      <div className="form-container my-5">
        <div className="input-group mb-3">
          <span className="input-group-text">Product Name</span>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Price</span>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Image Title</span>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setImgTitle(e.target.value)}
            value={imgTitle}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Image URL</span>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setImgUrl(e.target.value)}
            value={imgUrl}
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Description</span>
          <textarea
            className="form-control"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          ></textarea>
        </div>
      </div>
      <button className="btn btn-success" onClick={(e) => saveData(e)}>
        Save
      </button>
    </LayoutV1>
  );
};

export default AddProduct;
