import axios from "axios";
import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import ProductsCard from "../../Components/ProductsCard/ProductsCard";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryProducts } from "../../state/productSlice.js";

const CategoryProducts = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const categoryProducts = useSelector(
    (state) => state.product.categoryProducts
  );
  const mode = useSelector((state) => state.theme.mode);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const location = useLocation();

  // Fetch products when category changes
  useEffect(() => {
    const fetchProducts = async () => {
      if (!categoryProducts[name]) {
        setLoading(true); 
        try {
          const response = await axios.get(
            `https://fakestoreapi.com/products/category/${name}`
          );
          const fetchedProducts = response.data;

          // Dispatch the products to Redux
          dispatch(
            setCategoryProducts({
              category: name,
              products: fetchedProducts,
            })
          );

          setLoading(false); 
        } catch (error) {
          setLoading(false);
          toast.error(
            "Failed to fetch products, check your network connection and refresh!"
          );
        }
      }
    };

    fetchProducts();
  }, [name, categoryProducts, dispatch]);

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Styles
  const sectionStyles = {
    backgroundColor:
      mode === "dark"
        ? theme.palette.primary.main
        : theme.palette.background.default,
    padding: "5rem 2rem",
  };

  const elementStyles = {
    color:
      mode === "dark"
        ? theme.palette.neutral.light
        : theme.palette.primary.light,
  };

  const headerStyle = {
    color:
      mode === "dark"
        ? theme.palette.neutral.light
        : theme.palette.primary.light,
  };

  const products = categoryProducts[name] || []; // Get products for current category

  // Render
  return (
    <section style={sectionStyles}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
        }}
      >
        {loading ? (
          <CircularProgress sx={elementStyles} />
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
              No products available in this category
            </Typography>
          </Box>
        )}
      </Box>
    </section>
  );
};

export default CategoryProducts;
