import { Container } from "@mui/material";
import {
  Quote,
  Features,
  Story,
  Tokenomics,
} from "../../components";

const Main = () => {
  return (
    <main className="page">
      <Container
        maxWidth='100%'
        disableGutters>
        <Story />
        <Features />
        <Tokenomics />
        <Quote />
      </Container>
    </main>
  );
};

export default Main;