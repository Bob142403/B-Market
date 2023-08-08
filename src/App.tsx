import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import ProductPage from "./pages/Product/ProductPage";
import ProductList from "./pages/Product/ProductList";
import NavBar from "./components/Core/NavBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<NavBar />}
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
