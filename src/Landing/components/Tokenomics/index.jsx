import DefaultContainer from "../default/Container";
import TokenomicsBox from "./TokenomicsBox";

import { Box, Typography } from "@mui/material";

import star from "../../decoration/star.svg";
import coinLg from "../../decoration/coin-lg.png";
import coinSm from "../../decoration/coin-sm.png";
import coinLgOpacity from "../../decoration/coin-lg-opacity.png";

const Tokenomics = () => {
	return (
		<DefaultContainer padding={{ lg: "0 15rem", md: "0 30px", xs: "0 15px" }}>
			<Box
				className='tokenomics__wrapper'
				sx={{ mb: "180px", mt: "170px" }}>
				<img
					className='dec dec-star'
					src={star}
				/>
				<img
					className='dec dec-coin-lg'
					src={coinLg}
				/>
				<img
					className='dec dec-coin-lg-op'
					src={coinLgOpacity}
				/>
				<img
					className='dec dec-coin-sm'
					src={coinSm}
				/>
				<Typography
					variant='h2'
					textAlign='center'
					width='100%'
					zIndex={2}
					sx={{ mb: "40px", position: "relative" }}>
					Tokenomics
				</Typography>
				<Box className='tokenomics'>
					<TokenomicsBox
						title='Total Supply:'
						value='1 000 000 000'
					/>
					<TokenomicsBox
						title='Tax:'
						value='0%'
					/>
					<TokenomicsBox
						title='Token address:'
						value='HhJpBhRRn4g56VsyLuT8DL5Bv31HkXqsrahTTUCZeZg4'
					/>
				</Box>
			</Box>
		</DefaultContainer>
	);
};

export default Tokenomics;
