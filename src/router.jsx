import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import DetailProduct from "./pages/detail";
import AddProduct from "./pages/addProduct";
import LayoutAuth from "./layouts/auth";
import EditProduct from "./pages/editProduct";
import ChartPage from "./pages/chartExample";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<DetailProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/layout" element={<LayoutAuth />} />
        <Route path="/chart-example" element={<ChartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
