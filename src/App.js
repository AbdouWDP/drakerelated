import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./cmps/Home";
import Shop from "./cmps/Shop";
import ProductPage from "./cmps/ProductPage";
import Tour from "./cmps/Tour";
function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="shop-all" element={<Shop />} />
        <Route path="products/:productId" element={<ProductPage />} />
        <Route path="tour" element={<Tour />} />
      </Routes>
    </>
  );
}

export default App;
