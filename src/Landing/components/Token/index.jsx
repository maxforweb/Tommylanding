import { Box, Container, Paper, Typography } from "@mui/material";

import gov from "./img/gov.svg";
import stak from "./img/stak.svg";
import lock from "./img/lock.svg";
import charity from "./img/charity.svg";
import star from "./img/favorites.svg";

const Token = () => {
	return (
		<Container>
			<Box
				id="token-section"
				className='token__wrapper'
				sx={{
					mb: {
						xs: "70px",
						lg: "170px",
					},
				}}>
				<Typography
					variant='h2'
					textAlign='center'
					width='100%'
					zIndex={3}
					position={'relative'}>
					Token Utility
				</Typography>
				<Box
					sx={{
						mt: "50px",
					}}
					className='token-stack'>
					<Paper
						className='token'
						data-aos='zoom-in'>
						<img
							src={gov}
							width={50}
							height={50}
							alt="gov"
						/>
						<Typography
							variant='h4'
							color='#fff'
							sx={{ width: "100%" }}>
							Governance
						</Typography>
						<Typography
							variant='body2'
							sx={{ width: "100%", mt: "10px" }}>
							The token can be used for voting on proposals related to the project's development, such as protocol upgrades or changes.
						</Typography>
					</Paper>
					<Paper
						className='token'
						data-aos='zoom-in'>
						<img
							src={stak}
							width={50}
							height={50}
							alt="stak"
						/>
						<Typography
							variant='h4'
							sx={{ width: "100%" }}>
							Staking
						</Typography>
						<Typography
							variant='body2'
							sx={{ width: "100%", mt: "10px" }}>
							Holders of the tokens can stake their tokens to earn rewards, such as additional coins or access to special features.
						</Typography>
					</Paper>
					<Paper
						className='token'
						data-aos='zoom-in'>
						<img
							src={lock}
							width={50}
							height={50}
							alt="lock"
						/>
						<Typography
							variant='h4'
							sx={{ width: "100%" }}>
							Premium events and items access
						</Typography>
						<Typography
							variant='body2'
							sx={{ width: "100%", mt: "10px" }}>
							Holding a certain amount of coins may grant users access to exclusive content, features, or events.
						</Typography>
					</Paper>
					<Paper
						className='token'
						data-aos='zoom-in'>
						<img
							src={charity}
							width={50}
							height={50}
							alt="charity"
						/>
						<Typography
							variant='h4'
							sx={{ width: "100%" }}>
							Сharity and Tipping
						</Typography>
						<Typography
							variant='body2'
							sx={{ width: "100%", mt: "10px" }}>
							Memecoins can be used for charitable donations or as a means of tipping content creators and community members
						</Typography>
					</Paper>
					<Paper
						className='token'
						data-aos='zoom-in'>
						<img
							src={star}
							width={50}
							height={50}
							alt="star"
						/>
						<Typography
							variant='h4'
							sx={{ width: "100%" }}>
							Utility within a Platform
						</Typography>
						<Typography
							variant='body2'
							sx={{ width: "100%", mt: "10px" }}>
							In our cases, it can be in-game purchases, boosters, etc.
						</Typography>
					</Paper>
				</Box>
			</Box>
		</Container>
	);
};

export default Token;
