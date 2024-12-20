import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import StoreIcon from "@mui/icons-material/Store";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const StatCard = () => {
  const theme = useTheme();
  const mode = useSelector((state) => state.theme.mode);

  const stats = [
    {
      icon: <ShoppingCartIcon style={{ fontSize: "3rem" }} />,
      value: "2.5K",
      label: "Total Orders",
    },
    {
      icon: <PeopleIcon style={{ fontSize: "3rem" }} />,
      value: "1.5K",
      label: "Customers",
    },
    {
      icon: <StoreIcon style={{ fontSize: "3rem" }} />,
      value: "400",
      label: "Products",
    },
    {
      icon: <AttachMoneyIcon style={{ fontSize: "3rem" }} />,
      value: "$1.2M",
      label: "Revenue",
    },
  ];

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

  const paragraphStyles = {
    color:
      mode === "dark"
        ? theme.palette.neutral.light
        : theme.palette.primary.light,
  };

  const cardStyle = {
    backgroundColor:
      mode === "dark"
        ? theme.palette.primary.main
        : theme.palette.neutral.light,
  };

  const IconStyle = {
    color: mode === "dark" ? "white" : theme.palette.primary.main,
  };

  return (
    <section style={sectionStyles}>
      <Box textAlign="center" marginBottom="2rem">
        <Typography variant="h4" component="h1" style={headerStyle}>
          E-Commerce Performance Overview
        </Typography>
        <Typography
          variant="body1"
          style={{ ...paragraphStyles, maxWidth: "600px", margin: "1rem auto" }}
        >
          Discover key metrics that drive our online store's success. From total
          orders to revenue, we track every important aspect to ensure a
          seamless shopping experience for our customers.
        </Typography>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        gap="2rem"
      >
        {stats.map((stat, index) => (
          <Box
            key={index}
            style={{
              width: "300px",
              margin: "0 auto",
            }}
          >
            <Card elevation={3} style={{ ...cardStyle, padding: "1rem" }}>
              <CardContent style={{ textAlign: "center" }}>
                <Box style={IconStyle}>{stat.icon}</Box>
                <Typography variant="h5" component="h2" style={subtitleStyle}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" style={subtitleStyle}>
                  {stat.label}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </section>
  );
};

export default StatCard;
