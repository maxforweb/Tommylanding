import { useEffect, useState } from 'react';

import { Box, Typography } from "@mui/material";
import catIcon from '../../../assets/why/icon1.svg';

import "./progress.scss";

const HeroProgress = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    const duration = 2000;
    const endValue = 875;

    const animate = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1)
      const currentValue = Math.round(endValue * progress);

      setCounter(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <Box className="header__actions-progress" sx={{
      maxWidth: "285px",
    }}>
      <Box className="header__actions-counter" data-aos="bounce" sx={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}>
        <img src={catIcon} alt="cat" width={31} height={24} />
        <Typography variant="body2" fontWeight={600} sx={{
          display: "flex",
          fontSize: {
            xs: "14px",
            md: "22px"
          },
        }}>
          <span>{counter}</span> / 1000
        </Typography>
      </Box>
      <Box className="header__actions-progress-bar" data-aos="bounce" data-aos-offset="-300" mt={{
        xs: 1,
        md: 2
      }} sx={{
        position: "relative",
        width: "100%",
        height: 15,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}>
        <Box className="header__actions-progress-bar-fill" sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "65%",
          height: "100%",
          borderRadius: 20,
          background: "linear-gradient(90deg, rgba(222,202,255,1) 0%, rgba(105,30,226,1) 100%)",
        }} />
      </Box>
      <Box className="hero__actions-progress-text" data-aos="bounce" data-aos-offset="-300">
        <Typography variant="body2" fontWeight={500} fontSize={16} maxWidth={200} mt={2}>The happier The Tim — The more you get</Typography>
      </Box>
    </Box >
  );
};

export default HeroProgress;

