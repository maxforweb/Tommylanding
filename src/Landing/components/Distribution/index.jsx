import { Box, Container, Typography, List } from "@mui/material";

import './distribution.scss';
import dist from '../../assets/distribution.svg';
import DistItem from "./DistItem";

const Distribution = () => {
  return (
    <section className="distribution-section">
      <Container
        sx={{
          padding: { xs: "0 20px" },
        }}
      >
        <Typography variant="h2" textAlign={'center'}>Distribution</Typography>
        <Box className="distribution-content">
          <Box data-aos="zoom-in">
            <Box
              component="img"
              src={dist}
              alt="distribution"
              loading="lazy"
              sx={{
                width: "100%",
                maxWidth: 640,
                display: "block",
              }}
            />
          </Box>
          <Box>
            <List>
              <DistItem
                color="var(--_cyan-clr)"
                percent="27%"
                text="Community Pre-sale"
              />
              <DistItem
                color="var(--_blue-clr)"
                percent="6%"
                text="Private Sale"
              />
              <DistItem
                color="var(--_purple-clr)"
                percent="40%"
                text="Ecosystem Reserves"
              />
              <DistItem
                color="var(--_purple-lighter-clr)"
                percent="17%"
                text="Marketing and Rewards"
              />
              <DistItem
                color="var(--_pink-clr)"
                percent="10%"
                text="Early Contributors"
              />
            </List>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default Distribution;