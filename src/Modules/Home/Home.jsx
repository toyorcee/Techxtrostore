import axios from "axios";
import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero/Hero";
import Categories from "../../Components/Categories/Categories";
import ProductsCard from "../../Components/ProductsCard/ProductsCard";
import StatCard from "../../Components/StatCard/StatCard";
import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Box, CircularProgress } from "@mui/material";
import { setProducts } from "../../state/productSlice.js";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [loading, setLoading] = useState(false);
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
    if (products.length === 0) {
      const fetchProducts = async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            "https://fakestoreapi.com/products?limit=12"
          );
          dispatch(setProducts(response.data));
          setLoading(false);
        } catch (error) {
          setLoading(false);
          toast.error(
            "Failed to fetch products!, Check your network connection and refresh."
          );
        }
      };
      fetchProducts();
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <section sx={sectionStyles}>
        <Box sx={sectionStyles}>
          <Hero />
          <Categories />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
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
              MOST POPULAR PRODUCTS
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
            <Box>
              <Typography
                variant="h6"
                style={headerStyle}
                className="font-semibold text-center"
              >
                No products available
              </Typography>
            </Box>
          )}
          <StatCard />
        </Box>
      </section>
    </>
  );
};

export default Home;
