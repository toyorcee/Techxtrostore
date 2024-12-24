import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ecommerce from "../../Assets/ecomm.webp";
import { useSelector } from "react-redux";

const Hero = () => {
  const mode = useSelector((state) => state.theme.mode);
  const theme = useTheme();

  const heroStyles = {
    backgroundColor:
      mode === "dark"
        ? theme.palette.primary.main
        : theme.palette.background.default,
    padding: "5rem 2rem",
  };

  const headingStyles = {
    fontSize: "3rem",
    color:
      mode === "dark"
        ? theme.palette.neutral.light
        : theme.palette.primary.light,
  };

  const paragraphStyles = {
    color:
      mode === "dark"
        ? theme.palette.neutral.light
        : theme.palette.primary.light,
  };

  return (
    <Box component="section" sx={heroStyles}>
      <Box className="container mx-auto flex px-5 py-1 md:flex-row flex-col items-center">
        <Box className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <Typography
            variant="h1"
            sx={{
              ...headingStyles,
              fontFamily: "Gilmer, sans-serif",
              fontSize: {
                xs: "1.875rem",
                sm: "2.25rem",
                md: "2.3rem",
                lg: "2.575rem",
              }, 
              fontWeight: 500,
              lineHeight: 1.2,
              mb: 4, 
            }}
          >
            <span className="block">
              Discover the Latest in Tech, Fashion, and Gadgets
            </span>
            <span className="block">Shop for Men, Women, Kids, and More!</span>
          </Typography>
          <p style={paragraphStyles} className="mb-3 mt-3 leading-relaxed">
            From cutting-edge electronics to trendy fashion for all ages, we
            bring you the best deals and newest arrivals. Explore top-rated tech
            gadgets, stylish apparel, and essential gear—curated just for you.
            Whether you’re upgrading your setup or finding the perfect gift,
            Techxtrostore has something for everyone.
          </p>
        </Box>
        <Box className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={ecommerce}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
