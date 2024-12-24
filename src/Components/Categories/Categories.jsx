import React, { useEffect, useState } from "react";
import FeatureCard from "../FeatureCard/FeatureCard";
import { useLocation } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";

const Categories = () => {
  const [categories, setCategories] = useState([]);
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

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error(
          "Failed to fetch categories,check your network connection and refresh!"
        );
      }
    };
    fetchCategories();
  }, []);

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
          }}
        >
          <CircularProgress sx={elementStyles} />
        </Box>
      ) : categories?.length > 0 ? (
        <FeatureCard cards={categories} />
      ) : (
        <Box>No categories available</Box>
      )}
    </Box>
  );
};

export default Categories;
