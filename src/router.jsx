import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import DetailProduct from "./pages/detail";
import AddProduct from "./pages/addProduct";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<DetailProduct />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
