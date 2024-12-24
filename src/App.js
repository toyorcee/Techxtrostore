import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";
import { themeSettings } from "./state/theme";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Modules/Home/Home";
import Products from "./Modules/Products/Products";
import Product from "./Modules/Product/Product";
import CategoryProducts from "./Modules/CategoryProducts/CategoryProducts";
import Cart from "./Modules/Cart/Cart";
import About from "./Modules/About/About";
import Contact from "./Modules/Contact/Contact";
import Donate from "./Components/Donate";
import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = createTheme(themeSettings(mode));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
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
        <ToastContainer />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
