import { Box, Paper, Stack, Typography } from "@mui/material";
import DefaultContainer from "../default/Container";

import bot from "./img/bot.svg";
import power from "./img/power.svg";
import tokens from "./img/tokens.svg";

const Features = () => {
  return (
    <DefaultContainer>
      <Box sx={{mb: '170px'}}>
        <Typography variant="h2" textAlign="center" width="100%">
          Features
        </Typography>
        <Stack spacing={3} direction={"row"} mt="50px">
          <Paper className="feature">
            <Typography variant="h3" sx={{ width: "100%" }}>
              Play Game
            </Typography>
            <Typography
              variant="body2"
              sx={{ width: "100%", mt: "28px", mb: "30px" }}
            >
              Solana's first public BuyBot on Telegram. Promoting
              cross-pollination and offering free exposure through "Talking Tom
              Trending". As adoption grows, a small fee for trending will be
              introduced, with a chance for free inclusion. Generated revenue
              feeds into the Treat Jar (Treasury) for transparency, contributing
              to $Talking Tom`s growth.
            </Typography>
            <img src={bot} width={76} height={76} />
          </Paper>
          <Paper className="feature">
            <Typography variant="h3" sx={{ width: "100%" }}>
              Talking Tom Staking
            </Typography>
            <Typography variant="body2" sx={{ width: "100%", mt: "20px" }}>
              Unlock the full potential of your $Talking Tom investment with our
              Staking Pool Utility. Seamlessly stake your coins, earn
              sustainable rewards, and contribute to Solana's decentralization.
              User-friendly and secure, it's the hassle-free way to maximize
              your crypto returns.
            </Typography>
            <img src={tokens} width={76} height={76} />
          </Paper>
          <Paper className="feature">
            <Typography variant="h3" sx={{ width: "100%" }}>
              Further Utilities
            </Typography>
            <Typography variant="body2" sx={{ width: "100%", mt: "20px" }}>
              $Talking Tom is set to transform the Solana ecosystem, delivering
              essential utilities for the evolving needs of users. Our
              commitment ensures a dynamic contribution to Solana's long-term
              growth, serving hundreds of thousands of users.
            </Typography>
            <img src={power} width={76} height={76} />
          </Paper>
        </Stack>
      </Box>
    </DefaultContainer>
  );
};

export default Features;
