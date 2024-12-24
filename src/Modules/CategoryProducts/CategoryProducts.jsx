import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import ProductsCard from "../../Components/ProductsCard/ProductsCard";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";

const CategoryProducts = () => {
  const { name } = useParams();
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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${name}`
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error(
          "Failed to fetch products, check your network connection and refresh!"
        );
      }
    };
    fetchProducts();
  }, [name]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
          <Box>
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
