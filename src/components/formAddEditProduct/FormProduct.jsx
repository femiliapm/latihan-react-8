import Input from "../input/Input";

function FormProduct(props) {
  const {
    name,
    price,
    imgTitle,
    imgUrl,
    desc,
    onChangeName,
    onChangePrice,
    onChangeImgTitle,
    onChangeImageUrl,
    onChangeDesc,
  } = props;

  return (
    <div className="form-container my-5">
      <div className="input-group mb-3">
        <span className="input-group-text">Product Name</span>
        <Input type={"text"} onChangeInput={onChangeName} valueInput={name} />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Price</span>
        <Input
          type={"number"}
          onChangeInput={onChangePrice}
          valueInput={price}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Image Title</span>
        <Input
          type={"text"}
          onChangeInput={onChangeImgTitle}
          valueInput={imgTitle}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Image URL</span>
        <Input
          type={"text"}
          onChangeInput={onChangeImageUrl}
          valueInput={imgUrl}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Description</span>
        <textarea
          className="form-control"
          onChange={onChangeDesc}
          value={desc}
        ></textarea>
      </div>
    </div>
  );
}

export default FormProduct;
