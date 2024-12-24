import React, { useEffect, useState } from "react";
import ProductsCard from "../../Components/ProductsCard/ProductsCard";
import Categories from "../../Components/Categories/Categories";
import { Box, Typography, CircularProgress } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const mode = useSelector((state) => state.theme.mode);
  const location = useLocation();

  const sectionStyles = {
    backgroundColor:
      mode === "dark"
        ? theme.palette.primary.main
        : theme.palette.background.default,
    color:
      mode === "dark" ? theme.palette.grey[10] : theme.palette.primary[900],
    padding: "1rem 2rem",
  };

  const subtitleStyle = {
    color:
      mode === "dark" ? theme.palette.neutral.light : theme.palette.grey[1000],
  };

  const headerStyle = {
    color:
      mode === "dark"
        ? theme.palette.neutral.light
        : theme.palette.primary.light,
  };

  const elementStyles = {
    color:
      mode === "dark"
        ? theme.palette.neutral.light
        : theme.palette.primary.light,
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error(
          "Failed to fetch products!, Check your network connection and refresh."
        );
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Box sx={{ ...sectionStyles }}>
      <Categories />
      <Box className="flex flex-col text-center w-full">
        <Typography
          variant="subtitle2"
          className="tracking-widest font-medium title-font mb-1"
          style={subtitleStyle}
        >
          PRODUCTS
        </Typography>
        <Typography
          variant="h4"
          style={headerStyle}
          className="font-medium title-font"
        >
          ALL PRODUCTS
        </Typography>
      </Box>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <CircularProgress sx={elementStyles} />
        </Box>
      ) : products.length > 0 ? (
        <ProductsCard products={products} />
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <Typography
            variant="h6"
            style={headerStyle}
            className="font-semibold"
          >
            No products available
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Products;
