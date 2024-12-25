import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import StoreIcon from "@mui/icons-material/Store";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { motion } from "framer-motion";
import { useInView } from "../../utils/useInView"; 

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

  const [ref, isInView] = useInView({ threshold: 0.2 }); 

  return (
    <motion.section
      style={sectionStyles}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <Box textAlign="center" marginBottom="2rem">
        <Typography variant="h4" component="h1" style={headerStyle}>
          Our Performance Overview
        </Typography>
        <Typography
          variant="body1"
          style={{ ...paragraphStyles, maxWidth: "600px", margin: "1rem auto" }}
        >
          <span>
            Discover key metrics that drive our online store's success.
          </span>{" "}
          <br />
          <span>
            From total orders to revenue, we track every important aspect to
            ensure a seamless shopping experience for our customers.
          </span>
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
              width: "100%",
              maxWidth: "300px",
              margin: "0 auto",
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
                x: index === 1 || index === 0 ? -3 : 3,
              }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: [1, 0, 0.5, 1.5][index],
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
            </motion.div>
          </Box>
        ))}
      </Box>
    </motion.section>
  );
};

export default StatCard;
