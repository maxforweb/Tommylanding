import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
	typography: {
		fontFamily: "Grandstander",
		h2: {
			fontSize: "clamp(2.5rem, 7vw, 3.75rem)",
			fontWeight: 700,
			lineHeight: 1,
		},
		h3: {
			fontSize: 35,
			fontWeight: 700,
			color: "#fff",
		},
		h4: {
			fontSize: "clamp(1.2rem, 4vw, 1.75rem)",
			fontWeight: 600,
			color: "#fff",
		},
		body2: {
			fontSize: 18,
			fontWeight: 400,
			lineHeight: "23px",
			color: "#fff",
		},
		body1: {
			fontSize: 24,
			fontWeight: 500,
			lineHeight: "130%",
		},
		body3: {
			fontSize: "clamp(1.2rem, 4vw, 1.75rem)",
			fontWeight: 500,
			lineHeight: "130%",
			color: "#fff",
			display: "block",
		},
	},
});
