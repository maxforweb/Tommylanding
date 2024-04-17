import { Box } from "@mui/material";

import { useContext } from "react";
import { SiteInfocontext } from "../../../../helpers/context";

const HeaderLogo = () => {
	const { state } = useContext(SiteInfocontext);
	return (
		<Box className='header__logo'>
			<img
				src={state?.info.header__logo}
				alt='Tomo Cat'
			/>
		</Box>
	);
};

export default HeaderLogo;
