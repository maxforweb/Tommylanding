import { Box, Typography } from "@mui/material";
const IconBox = ({ icon, children }) => {
	return (
		<Box className='why-box'>
			<img
				className='why-box__icon'
				src={icon}
			/>
			<Typography variant='h5'>{children}</Typography>
		</Box>
	);
};

export default IconBox;
