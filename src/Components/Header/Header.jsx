import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  IconButton,
  Box,
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Divider,
  Typography,
} from "@mui/material";
import { WbSunny, Nightlight, Menu, Close } from "@mui/icons-material";
import { toggleMode } from "../../state/themeSlice";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import "./Header.css";

const navigations = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const theme = useTheme();
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const isMobile = useMediaQuery("(max-width: 900px)");

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  const headerStyles = {
    backgroundColor:
      mode === "dark"
        ? theme.palette.primary.main
        : theme.palette.background.default,
    color:
      mode === "dark" ? theme.palette.grey[10] : theme.palette.primary[900],
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "1rem 2rem",
  };

  const linkStyles = {
    textDecoration: "none",
    color:
      mode === "dark"
        ? theme.palette.neutral.light
        : theme.palette.primary.light,
    marginLeft: "1rem",
  };

  const buttonStyles = {
    textDecoration: "none",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    color:
      mode === "dark"
        ? theme.palette.neutral.light
        : theme.palette.primary.light,
    marginLeft: "1rem",
  };

  return (
    <AppBar position="sticky" style={headerStyles}>
      <Toolbar>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <Box display="flex" alignItems="center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10"
              viewBox="0 0 24 24"
              style={linkStyles}
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <Box ml={2} style={linkStyles}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "1.125rem",
                    md: "1.25rem",
                    lg: "1.5rem",
                  },
                  fontWeight: "bold",
                }}
              >
                TechXtro Store
              </Typography>
              <p className="text-xs italic">
                Your Ultimate Tech and Lifestyle Store
              </p>
            </Box>
          </Box>
        </Link>

        {/* Navigation Links */}
        {!isMobile ? (
          <Box
            display="flex"
            style={{
              flexGrow: 1,
              justifyContent: "center",
            }}
            className="font-semibold"
          >
            {navigations.map((nav) => (
              <Link key={nav.name} to={nav.path} style={linkStyles}>
                <span className="font-semibold">{nav.name}</span>
              </Link>
            ))}
          </Box>
        ) : (
          <Box flexGrow={1} />
        )}

        {/* Right Side */}
        <Box display="flex" alignItems="center" gap={2}>
          {/* Go to Cart Button (Hidden on Mobile) */}
          {!isMobile && (
            <Link to="/cart" style={buttonStyles}>
              <button className="inline-flex items-center border-0 py-2 px-4 focus:outline-none text-base mt-4 md:mt-0">
                Go to Cart
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </Link>
          )}

          {/* Theme Toggle */}
          <IconButton onClick={() => dispatch(toggleMode())} style={linkStyles}>
            {mode === "light" ? <Nightlight /> : <WbSunny />}
          </IconButton>

          {/* Hamburger Menu for Mobile */}
          {isMobile && (
            <IconButton
              onClick={handleDrawerToggle}
              style={linkStyles}
              edge="end"
            >
              <Menu />
            </IconButton>
          )}
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          style: {
            width: "75%",
            padding: "1rem",
            backgroundColor:
              mode === "dark"
                ? theme.palette.primary.main
                : theme.palette.background.default,
          },
        }}
      >
        <IconButton
          style={{ ...linkStyles, position: "absolute", top: 8, right: 8 }}
          onClick={handleDrawerToggle}
        >
          <Close />
        </IconButton>
        <List style={{ marginTop: "2rem" }}>
          {navigations.map((nav) => (
            <ListItem
              button
              key={nav.name}
              style={linkStyles}
              onClick={() => {
                handleDrawerToggle();
                navigate(nav.path);
              }}
            >
              <ListItemText
                primary={<span className="font-semibold">{nav.name}</span>}
              />
            </ListItem>
          ))}
        </List>

        {/* Divider and Go to Cart Button */}
        <Divider style={{ backgroundColor: "white", margin: "1rem 0" }} />
        <Link
          to="/cart"
          style={{ ...buttonStyles, display: "block", textAlign: "center" }}
          onClick={handleDrawerToggle}
        >
          <button className="inline-flex items-center justify-center border-0 py-2 px-4 focus:outline-none text-base mt-4 font-semibold w-48">
            Go to Cart
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      </Drawer>
    </AppBar>
  );
};

export default Header;
