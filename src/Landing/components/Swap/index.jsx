import { Box, Typography } from "@mui/material";
import DefaultContainer from "../default/Container";

import swap from "../../decoration/swap.jpg";

const SwapBlock = () => {
	return (
		<DefaultContainer padding={{ lg: "0 15rem", md: "0 30px", xs: "0 15px" }}>
			<Box className='swap__wrapper'>
				<Box>
					<Typography
						variant='h1'
						component='h2'
						fontWeight={700}
						lineHeight={1}
						textAlign={"center"}>
						Swap to Get it!
						<Typography
							sx={{ mt: 2 }}
							variant='body2'
							textAlign='center'>
							Coming Soon
						</Typography>
					</Typography>
				</Box>
				<Box>
					<img
						src={swap}
						alt='Swap To Get It'
					/>
				</Box>
			</Box>
		</DefaultContainer>
	);
};

export default SwapBlock;
