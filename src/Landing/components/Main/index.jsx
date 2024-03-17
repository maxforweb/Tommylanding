import { Container } from "@mui/material";
import {
  Hero,
  Quote,
  Token,
  Story,
  Tokenomics,
  Steps,
  Features,
} from "../../components";

const Main = () => {
  return (
    <main className="page">
      <Container
        maxWidth='100%'
        disableGutters>
        <Hero />
        <Story />
        <Features />
        <Token />
        <Steps />
        <Tokenomics />
        <Quote />
      </Container>
    </main>
  );
};

export default Main;