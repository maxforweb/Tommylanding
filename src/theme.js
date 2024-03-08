import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  typography: {
    fontFamily: "Grandstander",
    h2: {
      fontSize: 60,
      fontWeight: 700,
      lineHeight: '60px'
    },
    h3: {
      fontSize: 35,
      fontWeight: 700,
      color: "#fff"
    },
    body2: {
      fontSize: 18,
      fontWeight: 400,
      lineHeight: "23px",
      color: '#fff'
    },
    body1: {
      fontSize: 24,
      fontWeight: 500,
      lineHeight: '130%',
      fontFamily: "WorkSans"
    }
  },
});