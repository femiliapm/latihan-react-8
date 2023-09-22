function Input({ type, className, onChangeInput, valueInput }) {
  return (
    <input
      type={type || "text"}
      className={`form-control ${className}`}
      onChange={onChangeInput}
      value={valueInput}
    />
  );
}

export default Input;
