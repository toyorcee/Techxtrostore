import React, { useEffect, useState } from "react";
import Hero from "../../Components/Hero/Hero";
import Categories from "../../Components/Categories/Categories";
import ProductsCard from "../../Components/ProductsCard/ProductsCard";
import StatCard from "../../Components/StatCard/StatCard";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { Typography, Box } from "@mui/material";

const Home = () => {
  const [products, setProducts] = useState([]);
  const theme = useTheme();
  const mode = useSelector((state) => state.theme.mode);

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

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=12"
      );
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
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
        {products.length > 0 ? (
          <ProductsCard products={products} />
        ) : (
          <div>Loading...</div>
        )}
        <StatCard />
      </Box>
    </>
  );
};

export default Home;
