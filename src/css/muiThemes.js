import { createTheme } from "@mui/material/styles";

export const primary = createTheme({
  palette: {
    primary: {
      main: "#1E1A1A",
    },
    secondary: {
      main: "#fac7c4",
    },
  },
  typography: {
    button: {
      fontFamily: "Open Sans",
      fontWeight: 500,
      textTransform: "none",
      fontSize: 18,
    },
  },
});
