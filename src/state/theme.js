export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#B0B0B0",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#E6FBFF",
    100: "#CCF7FE",
    200: "#99EEFD",
    300: "#66E6FC",
    400: "#33DDFB",
    500: "#00D5FA", // Aqua color for buttons in light mode
    600: "#00A0BC",
    700: "#006B7D",
    800: "#00353F",
    900: "#0F2167", // Dark blue background color for dark mode
  },
  accent: {
    50: "#FF6F61", // A coral tone for accent
    100: "#F4B400", // Yellowish accent for promotions or buttons
    200: "#FF0000",// red for errors
  },
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              dark: colorTokens.primary[900], // lighter blue accent
              main: colorTokens.primary[900], // aqua color for dark mode buttons
              light: colorTokens.primary[800], // darker shade for dark mode
              error: colorTokens.accent[200], 
            },
            neutral: {
              dark: colorTokens.grey[100],
              main: colorTokens.grey[10],
              mediumMain: colorTokens.grey[300],
              medium: colorTokens.grey[400],
              light: colorTokens.grey[0],
            },
            background: {
              default: colorTokens.primary[900], // Set the dark mode background color to primary[900] (dark blue)
              alt: colorTokens.primary[800], // Set a lighter background for alternate sections
            },
          }
        : {
            primary: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[900],
              light: colorTokens.primary[900],
              error: colorTokens.accent[200],
            },
            neutral: {
              dark: colorTokens.grey[700],
              main: colorTokens.grey[500],
              mediumMain: colorTokens.grey[400],
              medium: colorTokens.grey[200],
              light: colorTokens.grey[0],
            },
            background: {
              default: colorTokens.grey[10], // Light mode background color
              alt: colorTokens.grey[0], // Light mode alternate background color
            },
          }),
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
