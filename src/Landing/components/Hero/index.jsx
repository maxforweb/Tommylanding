import { Container, Typography, Box } from "@mui/material";
import "./hero.scss";

import HeroProgress from "./HeroProgress";
import catWebP from "../../assets/hero-cat.webp";
import arrowIcon from "../../assets/arrow-circle.svg";
import heroIcon1 from "../../assets/hero/icon1.svg";
import heroIcon2 from "../../assets/hero/icon2.svg";
import heroIcon3 from "../../assets/hero/icon3.svg";


const Hero = () => {


  return (
    <section className="hero">
      <Container className="hero__container">
        <Box className="hero__body">
          <div className="hero__header"
            mb={6}>
            <Typography variant="h1" sx={{
              fontWeight: 700,
              color: "white",
              textAlign: "center",
              textShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            }}>
              Tim The Cat
            </Typography>
            <Typography variatn="body2"
              sx={{
                textAlign: "center",
              }}>
              The Cutiest Cat supported by Solana Fam
            </Typography>
          </div>
          <div className="hero__actions">
            <HeroProgress />
            <a className="btn" href="#">
              Play now!
              <span className="btn__icon">
                <img src={arrowIcon} alt="arrow" />
              </span>
            </a>
          </div>
          <div className="hero__body-cat">
            <div className="hero__body-decoration">
              <Typography variant="body2" textAlign={'center'} fontSize={16} lineHeight={1.3} sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexDirection: "column"
              }}>
                <img src={heroIcon1} alt="icon" />
                Pet the Cat
              </Typography>
            </div>
            <div className="hero__body-img-main">
              <img src={catWebP} alt="cat" />
            </div>
            <div className="hero__body-decoration">
              <Typography variant="body2" textAlign={'center'} fontSize={16} lineHeight={1} mb={7}>
                <img src={heroIcon2} alt="icon" />
                Earn Points
              </Typography>
              <Typography variant="body2" textAlign={'center'} fontSize={16} lineHeight={1.3} sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexDirection: "column"
              }}>
                <img src={heroIcon3} alt="icon" />
                Reffer Your Friends
              </Typography>
            </div>
          </div>
        </Box>
      </Container>
    </section>
  );
};

export default Hero;