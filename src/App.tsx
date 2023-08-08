import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import ProductPage from "./pages/Product/ProductPage";
import ProductList from "./pages/Product/ProductList";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
          children={
            <>
              <Route path="/" element={<ProductList />} />
              <Route path="/:productId" element={<ProductPage />} />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
