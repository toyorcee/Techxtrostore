import React, { useEffect, useState } from "react";
import ProductsCard from "../../Components/ProductsCard/ProductsCard";
import Categories from "../../Components/Categories/Categories";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";

const Products = () => {
  const [products, setProducts] = useState([]);

  const theme = useTheme();
  const mode = useSelector((state) => state.theme.mode);

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

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <Box sx={{ ...sectionStyles }}>
      <Categories />
      <Box className="flex flex-col text-center w-full mt-20">
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
      {products.length > 0 ? (
        <ProductsCard products={products} />
      ) : (
        <div>Loading...</div>
      )}
    </Box>
  );
};

export default Products;
