import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, Box } from "@mui/material";
import { WbSunny, Nightlight } from "@mui/icons-material";
import { toggleMode } from "../../state/themeSlice";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const navigations = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const mode = useSelector((state) => state.theme.mode); 
  const dispatch = useDispatch();
  const theme = useTheme();

  const headerStyles = {
    backgroundColor:
      mode === "dark"
        ? theme.palette.primary.main
        : theme.palette.background.default,
    color:
      mode === "dark" ? theme.palette.grey[10] : theme.palette.primary[900], 
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const linkStyles = {
    textDecoration: "none",
    color: mode === "dark" ?  theme.palette.neutral.light :  theme.palette.primary.light, 
    marginLeft: "1rem",
  };

  return (
    <Box component="header" style={headerStyles}>
      {/* Logo */}
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Box display="flex" alignItems="center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10"
            style={{
              color: mode === "dark" ? "#F6F6F6" : "#0F2167",
              padding: "4px",
              borderRadius: "50%",
              backgroundColor: mode === "dark" ? "#0F2167" : "#F6F6F6",
            }}
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <Box ml={2} style={linkStyles}>
            <h1 style={{ margin: 0, fontSize: "1.5rem", fontWeight: "bold" }}>
              TechXtro Store
            </h1>
            <p style={{ margin: 0, fontSize: "0.75rem", fontStyle: "italic" }}>
              Your Ultimate Tech and Lifestyle Store
            </p>
          </Box>
        </Box>
      </Link>

      {/* Navigation */}
      <Box display="flex">
        {navigations.map((nav) => (
          <Link key={nav.name} to={nav.path} style={linkStyles}>
            {nav.name}
          </Link>
        ))}
      </Box>

      {/* Toggle Button */}
      <IconButton onClick={() => dispatch(toggleMode())} style={linkStyles}>
        {mode === "light" ? <Nightlight /> : <WbSunny />}
      </IconButton>
    </Box>
  );
};

export default Header;
