import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Modules/Home/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./Modules/Products/Products";
import Product from "./Modules/Product/Product";
import CategoryProducts from "./Modules/CategoryProducts/CategoryProducts";
import Cart from "./Modules/Cart/Cart";
import About from "./Modules/About/About";
import Contact from "./Modules/Contact/Contact";
import Donate from "./Components/Donate";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories/:name" element={<CategoryProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Donate />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
