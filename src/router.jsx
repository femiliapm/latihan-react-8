import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import DetailProduct from "./pages/detail";
import AddProduct from "./pages/addProduct";
import LayoutAuth from "./layouts/auth";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<DetailProduct />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/layout" element={<LayoutAuth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
