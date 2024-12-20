import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";

const ProductsCard = ({ products = [] }) => {
  const theme = useTheme();
  const mode = useSelector((state) => state.theme.mode);

  const sectionStyles = {
    backgroundColor:
      mode === "dark"
        ? theme.palette.primary.main
        : theme.palette.background.default,
    padding: "5rem 2rem",
  };

  const cardMediaStyles = {
    backgroundColor: mode === "dark" ? "white" : "white",
    filter: mode === "dark" ? "brightness(70%)" : "none",
    height: "200px",
    objectFit: "contain",
  };

  const cardStyles = {
    backgroundColor:
      mode === "dark"
        ? theme.palette.primary.main
        : theme.palette.background.default,
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
    width: "100%",
    height: "auto",
    maxWidth: "300px",
    margin: "0 auto",
  };

  const subtitleStyle = {
    color:
      mode === "dark"
        ? theme.palette.neutral.light
        : theme.palette.primary.light,
  };

  return (
    <section style={sectionStyles}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
        }}
      >
        {products.map((product) => {
          const { id, title, price, description, category, image } = product;

          return (
            <Box
              key={id}
              sx={{
                flex: "1 1 calc(25% - 16px)", // Default: 4 items per row
                maxWidth: "calc(25% - 16px)",

                // Media query adjustments
                "@media (max-width: 960px)": {
                  flex: "1 1 calc(50% - 16px)", // 2 items per row for tablets
                  maxWidth: "calc(50% - 16px)",
                },
                "@media (max-width: 600px)": {
                  flex: "1 1 100%", // 1 item per row for small screens
                  maxWidth: "100%",
                },
              }}
            >
              <Link to={`/products/${id}`} style={{ textDecoration: "none" }}>
                <Card sx={cardStyles} variant="outlined">
                  <CardMedia
                    component="img"
                    image={image}
                    alt={title}
                    sx={cardMediaStyles}
                  />
                  <CardContent>
                    <Typography
                      variant="subtitle2"
                      style={subtitleStyle}
                      className="capitalize"
                    >
                      {category}
                    </Typography>
                    <Typography
                      variant="h6"
                      className="font-medium"
                      fontWeight="600"
                      style={subtitleStyle}
                    >
                      {title.length > 30 ? `${title.slice(0, 30)}...` : title}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={subtitleStyle}
                      sx={{ mt: 1 }}
                    >
                      {description.slice(0, 60)}...
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Typography
                        variant="body1"
                        style={subtitleStyle}
                        fontWeight="bold"
                      >
                        ${price}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Link>
            </Box>
          );
        })}
      </Box>
    </section>
  );
};

export default ProductsCard;
