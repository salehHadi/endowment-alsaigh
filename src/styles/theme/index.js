import { createTheme } from "@mui/material";

export const Colors = {
  color1: "#978648",
  color2: "#113C10",
  color3: "#1D5618",
  color4: "#29752C",
  color5: "#229E1F",
  color6: "#49B937",
  color7: "#FFDD2E",
  black: "#072408",

  white: "#FFF",
};

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          cursor: "pointer",
        },
      },
    },
  },
});

export default theme;
