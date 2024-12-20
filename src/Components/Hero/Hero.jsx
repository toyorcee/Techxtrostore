import React from "react";
import { Box } from "@mui/material";
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
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1
            style={headingStyles}
            className="title-font sm:text-4xl text-3xl mb-4 font-medium"
          >
            Discover the Latest in Tech, Fashion, and Gadgets
            <br className="hidden lg:inline-block" />
            Shop for Men, Women, Kids, and More!
          </h1>
          <p style={paragraphStyles} className="mb-3 mt-3 leading-relaxed">
            From cutting-edge electronics to trendy fashion for all ages, we
            bring you the best deals and newest arrivals. Explore top-rated tech
            gadgets, stylish apparel, and essential gear—curated just for you.
            Whether you’re upgrading your setup or finding the perfect gift,
            Techxtrostore has something for everyone.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={ecommerce}
          />
        </div>
      </div>
    </Box>
  );
};

export default Hero;
