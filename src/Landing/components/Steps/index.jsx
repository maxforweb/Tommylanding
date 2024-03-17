import Step from "./Step";
import "./steps.scss";
import arrowIcon from "../../assets/arrow-circle.svg";
import { Box, Container } from "@mui/material";

const Steps = () => {
  return (
    <section id="roadmap-section">
      <Container>
        <Box className="steps__row">
          <Step
            title={'Phase 1'}
            subtitle={'Pet the cat and earn points'}
            items={[
              'Leaderboard',
              'Web and TG apps',
              'Referral program',
            ]}
            animationDelay={100}
          >
            <a className="btn btn-sm" href="#">
              Try now!
              <span className="btn__icon">
                <img src={arrowIcon} alt="arrow" />
              </span>
            </a>
          </Step>
          <Step
            title={'Phase 2'}
            items={[
              'Basic NFT mint',
              'Cat Sleep (mining)',
              'Feed Cat (boosters)',
              'Shelters'
            ]}
            animationDelay={200}
          />
          <Step
            title={'Phase 3'}
            items={[
              'Shop with clothes',
              'Loot Boxes',
              'NFT re-mint launch'
            ]}
            animationDelay={300}
          />
          <Step
            title={'Phase 4'}
            items={[
              'Clean the Cat place',
              'Play with cat'
            ]}
            animationDelay={400}
          />
        </Box>
      </Container>
    </section>
  );
};

export default Steps;