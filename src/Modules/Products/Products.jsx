import axios from "axios";
import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import ProductsCard from "../../Components/ProductsCard/ProductsCard";
import Categories from "../../Components/Categories/Categories";
import { Box, Typography, CircularProgress } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../state/productSlice.js";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const theme = useTheme();
  const mode = useSelector((state) => state.theme.mode);
  const location = useLocation();
  const [loading, setLoading] = useState(false);

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
    if (!products.length) {
      const fetchProducts = async () => {
        setLoading(true);
        try {
          const response = await axios.get("https://fakestoreapi.com/products");
          dispatch(setProducts(response.data));
        } catch (error) {
          toast.error(
            "Failed to fetch products! Check your network connection and refresh."
          );
        } finally {
          setLoading(false);
        }
      };
      fetchProducts();
    }
  }, [dispatch, products.length]);

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
          sx={subtitleStyle}
        >
          PRODUCTS
        </Typography>
        <Typography
          variant="h4"
          className="font-medium title-font"
          style={headerStyle}
        >
          ALL PRODUCTS
        </Typography>
      </Box>

      {/* Render based on conditions */}
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
