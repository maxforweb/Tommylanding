import { Container } from "@mui/material";

const DefaultContainer = ({ children }) => {
  return (
    <Container
      sx={{ width: {md: "95%", xs: "100%"}, padding: {md: "0 8.125rem", xs: "0 20px"} }}
      maxWidth="xl"
      disableGutters
    >
      {children}
    </Container>
  );
};

export default DefaultContainer;
