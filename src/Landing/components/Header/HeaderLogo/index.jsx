import { Box } from "@mui/material";

import logo from "../../../assets/logo.svg";

const HeaderLogo = () => {
  return (
    <Box className="header__logo">
      <img src={logo} alt="Tim Cat" />
    </Box>
  );
};

export default HeaderLogo;