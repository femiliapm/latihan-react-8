import Navbar from "../../components/navbar/Navbar";
import "./layout.css";
import PropTypes from "prop-types";

const LayoutV1 = ({ children }) => {
  return (
    <div className="container">
      {/* navbar */}
      <Navbar />
      {/* main section */}
      <main>{children}</main>
    </div>
  );
};

LayoutV1.propTypes = {
  children: PropTypes.element,
};

export default LayoutV1;
