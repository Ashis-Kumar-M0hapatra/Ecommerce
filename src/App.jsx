import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Products from "./components/Products";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./components/ProductList";
import Cart from "./pages/Cart"
function App() {
 
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App