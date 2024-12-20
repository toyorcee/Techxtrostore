import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const FeatureCard = ({ cards = [1, 2, 3] }) => {
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

  const cardContainerStyles = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    padding: "1.5rem",
    backgroundColor:
      mode === "dark" ? theme.palette.primary.main : theme.palette.grey[100],
    boxShadow: 3,
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  };

  const cardIconStyles = {
    width: "2rem",
    height: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    backgroundColor: mode === "dark" ? "#0F2167" : "#F6F6F6",
    color: mode === "dark" ? "#F6F6F6" : "#0F2167",
    padding: "4px",
  };

  const cardTextStyles = {
    color:
      mode === "dark"
        ? theme.palette.neutral.light
        : theme.palette.primary.light,
  };

  const cardContentStyles = {
    color:
      mode === "dark"
        ? theme.palette.neutral.light
        : theme.palette.primary.light,
  };

  const categoryDescriptions = {
    electronics: "Explore the latest gadgets, devices, and tech gear.",
    jewelery: "Elegant designs crafted to perfection.",
    "men's clothing": "Trendy and comfortable apparel for men.",
    "women's clothing": "Stylish and versatile outfits for every occasion.",
  };

  return (
    <section style={sectionStyles}>
      <Box className="container px-5 py-5 mx-auto">
        <Box className="flex flex-col text-center w-full mb-20">
          <Typography
            variant="subtitle2"
            className="tracking-widest font-medium title-font mb-1"
            style={subtitleStyle}
          >
            FEATURED CATEGORIES
          </Typography>
          <Typography
            variant="h4"
            style={headerStyle}
            className="font-medium title-font"
          >
            Explore Our Best Collections
          </Typography>
        </Box>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {cards?.map((card, index) => {
            return (
              <div key={index}>
                <Link to={`/categories/${card}`} className="cursor-pointer">
                  <Card sx={cardContainerStyles}>
                    <Box display="flex" alignItems="center" mb={2}>
                      <Box sx={cardIconStyles} style={cardContentStyles}>
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      </Box>
                      <Typography
                        variant="h5"
                        style={{ ...cardTextStyles, fontWeight: 600 }}
                        className="capitalize"
                      >
                        {card}
                      </Typography>
                    </Box>
                    <CardContent>
                      <Typography variant="body2" style={cardContentStyles}>
                        {categoryDescriptions[card] ||
                          "Description not available"}
                      </Typography>
                    </CardContent>
                    <Box mt={2}>
                      <Typography
                        variant="body2"
                        color="primary"
                        sx={{ display: "flex", alignItems: "center" }}
                        style={cardContentStyles}
                      >
                        Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </Typography>
                    </Box>
                  </Card>
                </Link>
              </div>
            );
          })}
        </div>
      </Box>
    </section>
  );
};

export default FeatureCard;
