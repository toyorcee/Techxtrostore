import axios from "axios";
import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";
import FeatureCard from "../FeatureCard/FeatureCard";
import { useLocation } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { setCategories } from "../../state/productSlice.js";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories);
  const theme = useTheme();
  const mode = useSelector((state) => state.theme.mode);
  const [loading, setLoading] = useState(false);
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
    if (!categories.length) {
      const fetchCategories = async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            "https://fakestoreapi.com/products/categories"
          );
          dispatch(setCategories(response.data));
        } catch (error) {
          toast.error(
            "Failed to fetch categories, check your network connection and refresh!"
          );
        } finally {
          setLoading(false);
        }
      };
      fetchCategories();
    }
  }, [dispatch, categories.length]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Box sx={sectionStyles}>
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
      ) : categories.length > 0 ? (
        <FeatureCard cards={categories} />
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
            No categories available
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Categories;
