import { Box, Typography } from "@mui/material";

import paw from "../../../assets/paw.svg";
import stepArrow from "../../../assets/step-arrow.svg";

const Step = ({ title, subtitle, items, children, animationDelay }) => {
  return (
    <Box className="steps__col" data-aos="fade-up" data-aos-delay={animationDelay}>
      <img className="steps__arrow" src={stepArrow} />
      <Typography variant="h2" mb={{
        xs: '10px',
        sm: '20px',
        md: '30px',
      }}>{title}</Typography>
      <Typography variant="h4">{subtitle}</Typography>
      {items && (
        <ul className="steps__list">
          {items.map((item, index) => (
            <li key={index}>
              <img src={paw} alt="paw" />
              <Typography variant="body2">{item}</Typography>
            </li>
          ))}
        </ul>
      )}
      {children}
    </Box>
  );
};

export default Step;