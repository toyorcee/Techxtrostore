import React from "react";
import { Link } from "react-router-dom";
import { IconButton, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";

const Footer = () => {
  const theme = useTheme();
  const mode = useSelector((state) => state.theme.mode);

  const footerStyles = {
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
    marginBottom: "0.5rem",
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

  const IconStyle = {
    color: mode === "dark" ? "white" : theme.palette.primary.main,
  };

  const footerLinks = [
    {
      title: "CATEGORIES",
      links: [
        { name: "Men", path: "/categories/men" },
        { name: "Women", path: "/categories/women" },
        { name: "Jewelry", path: "/categories/jewelery" },
        { name: "Gadgets", path: "/categories/gadgets" },
      ],
    },
    {
      title: "SUPPORT",
      links: ["Contact Us", "FAQ", "Returns", "Shipping"],
    },
    {
      title: "COMPANY",
      links: ["About Us", "Careers", "Privacy Policy", "Terms of Service"],
    },
    {
      title: "SOCIAL MEDIA",
      links: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
    },
  ];

  const iconData = [
    {
      id: 1,
      path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
      fill: "currentColor",
      viewBox: "0 0 24 24",
    },
    {
      id: 2,
      path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
      fill: "currentColor",
      viewBox: "0 0 24 24",
    },
    {
      id: 3,
      rect: (
        <rect
          width="20"
          height="20"
          x="2"
          y="2"
          rx="5"
          ry="5"
          fill="none"
        ></rect>
      ),
      path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
    },
  ];

  return (
    <footer style={footerStyles}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          mb: 4,
        }}
      >
        {/* Logo and description */}
        <Box
          sx={{
            flex: "1 1 100%", // Full width on small screens
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            mb: { xs: 3, sm: 0 }, // Adjust margin at smaller screens
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Box display="flex" alignItems="center" justifyContent="center">
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
              <Box ml={2}>
                <Typography
                  variant="h5"
                  sx={{ ...headerStyle, fontWeight: "bold" }}
                >
                  TechXtro Store
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ ...subtitleStyle, fontStyle: "italic" }}
                >
                  Your Ultimate Tech and Lifestyle Store
                </Typography>
              </Box>
            </Box>
          </Link>
        </Box>

        {/* Footer Links */}
        {footerLinks.map((section, index) => (
          <Box
            key={index}
            sx={{
              flex: "1 1 100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              mb: 3,
              [theme.breakpoints.up("sm")]: {
                flex: "1 1 48%",
              },
              [theme.breakpoints.up("md")]: {
                flex: "1 1 23%",
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{ ...headerStyle, fontWeight: "bold", mb: 2 }}
            >
              {section.title}
            </Typography>
            {section.links.map((link, linkIndex) => (
              <Link
                to={typeof link === "object" ? link.path : "#"}
                key={linkIndex}
                style={linkStyles}
              >
                {typeof link === "object" ? link.name : link}
              </Link>
            ))}
          </Box>
        ))}
      </Box>

      {/* Footer Bottom */}
      <Box sx={{ ...footerStyles, py: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}
          >
            {iconData.map((icon) => (
              <IconButton key={icon.id} sx={{ ...IconStyle }}>
                <svg
                  fill={icon.fill}
                  stroke={icon.stroke || undefined}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox={icon.viewBox}
                >
                  {icon.rect ? icon.rect : null} <path d={icon.path}></path>
                </svg>
              </IconButton>
            ))}
          </Box>
          <Typography variant="body2" sx={{ ...subtitleStyle }}>
            <Link
              href="https://twitter.com/knyttneve"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#F05804" }}
            >
              Sponsored by @techxtroverts
            </Link>
            <Box sx={{ ...IconStyle }}>© {new Date().getFullYear()} </Box>
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
