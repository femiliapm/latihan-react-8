import "./auth.css";

const LayoutAuth = ({ children }) => {
  return (
    <div className="d-flex auth-wrapper bg-info bg-opacity-50">
      <div className="left bg-primary bg-opacity-25">
        <h1>Selamat Datang</h1>
      </div>
      <div className="right d-flex justify-content-center align-items-center">
        {children}
      </div>
    </div>
  );
};

export default LayoutAuth;
