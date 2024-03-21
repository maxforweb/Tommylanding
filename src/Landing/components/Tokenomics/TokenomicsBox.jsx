import { Box, Typography } from "@mui/material";

const TokenomicsBox = ({ title, value }) => {
	return (
		<Box
			className='tokenomics__item'
			data-aos='zoom-in-down'>
			<Typography
				variant='h4'
				mb={1}
				sx={{ fontWeight: "600" }}>
				{title}
			</Typography>
			<Typography
				variant='body2'
				sx={{ fontWeight: "600" }}>
				{value}
			</Typography>
		</Box>
	);
};

export default TokenomicsBox;
