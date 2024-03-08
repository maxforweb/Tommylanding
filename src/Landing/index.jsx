import { Container } from "@mui/material";
import { Form, Quote, Features, Story } from "./components";
import "./index.scss";

const Landing = () => {
  return (
    <Container maxWidth="100%" disableGutters>
      <Story />
      <Quote />
      <Features />
    </Container>
  );
};

export default Landing;
