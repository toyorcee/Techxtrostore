import React from "react";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import aboutimg from "../../Assets/ecommerce-10.webp";
import { Box, Typography } from "@mui/material";

const About = () => {
  const theme = useTheme();
  const mode = useSelector((state) => state.theme.mode);

  const stats = [
    { value: "2.7K", label: "Users" },
    { value: "1.8K", label: "Subscribes" },
    { value: "450k", label: "Purchases" },
    { value: "1200", label: "Products" },
  ];

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

  const headerStyle = {
    color:
      mode === "dark"
        ? theme.palette.neutral.light
        : theme.palette.primary.light,
  };

  return (
    <section style={sectionStyles}>
      <Box className="container px-5 py-24 mx-auto items-center justify-center grid grid-cols-1 lg:flex gap-4">
        <Box className="flex flex-wrap mt-auto mb-auto lg:w-1/2 w-full">
          <Box className="w-full sm:p-4 px-4 mb-6 text-center items-center justify-center">
            <Typography
              variant="h2"
              style={subtitleStyle}
              className="capitalize"
            >
              ABOUT US
            </Typography>
            <Box sx={paragraphStyles} className="leading-relaxed">
              Founded in 2017, Techxtro Store has become a trusted name in
              retail, offering a comprehensive range of products designed to
              meet the diverse needs of our customers. We provide an extensive
              selection across various categories, including Male, Female,
              Gadgets, and Jewelry. Whether you're seeking cutting-edge tech
              gadgets, fashionable apparel for men and women, or exquisite
              jewelry, we have everything you need. We are committed to
              delivering a seamless shopping experience with a user-friendly
              platform that ensures easy ordering. With stores across Canada,
              the USA, Nigeria, and an expanding global presence, we strive to
              bring quality products to customers worldwide. At Techxtro Store,
              we stand for exceptional quality, affordable prices, and unmatched
              convenience.
            </Box>
          </Box>
          <Box className="flex flex-wrap justify-center items-center">
            {stats.map((stat, index) => (
              <Box key={index} className="p-4 sm:w-1/2 lg:w-1/4 w-1/2 text-center">
                <h2 style={headerStyle} className="title-font font-medium text-3xl">
                  {stat.value}
                </h2>
                <p style={paragraphStyles} className="leading-relaxed">
                  {stat.label}
                </p>
              </Box>
            ))}
          </Box>
        </Box>
        <Box className="lg:w-1/2 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <img
            className="object-cover object-center w-full h-full"
            src={aboutimg}
            alt="stats"
          />
        </Box>
      </Box>
    </section>
  );
};

export default About;
