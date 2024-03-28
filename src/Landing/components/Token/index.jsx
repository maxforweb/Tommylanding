import { Box, Container, Paper, Typography } from "@mui/material";

import gov from "./img/gov.svg";
import stak from "./img/stak.svg";
import lock from "./img/lock.svg";
import charity from "./img/charity.svg";
import star from "./img/favorites.svg";
import DecorBlock from "../DecorBlock";

const Token = () => {
	return (
		<Box
			id='token-section'
			className='token__wrapper'
			sx={{
				mb: {
					xs: "70px",
					lg: "170px",
				},
			}}>
			<Container
				sx={{
					position: "relative",
				}}>
				<DecorBlock iconName='ellipseFull' />
				<Typography
					variant='h2'
					textAlign='center'
					width='100%'
					zIndex={3}
					position={"relative"}>
					Utility
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
							alt='gov'
						/>
						<Typography
							variant='h4'
							color='#fff'
							sx={{ width: "100%" }}>
							Govern
						</Typography>
						<Typography
							variant='body2'
							sx={{ width: "100%", mt: "10px" }}>
							Make decisions. Influence Tomo`s future.
						</Typography>
					</Paper>
					<Paper
						className='token'
						data-aos='zoom-in'>
						<img
							src={stak}
							width={50}
							height={50}
							alt='stak'
						/>
						<Typography
							variant='h4'
							sx={{ width: "100%" }}>
							Stake
						</Typography>
						<Typography
							variant='body2'
							sx={{ width: "100%", mt: "10px" }}>
							Stake to get rewards and access extra options.
						</Typography>
					</Paper>
					<Paper
						className='token'
						data-aos='zoom-in'>
						<img
							src={lock}
							width={50}
							height={50}
							alt='lock'
						/>
						<Typography
							variant='h4'
							sx={{ width: "100%" }}>
							Hold
						</Typography>
						<Typography
							variant='body2'
							sx={{ width: "100%", mt: "10px" }}>
							Keep coins to unveil secret content, features, and events.
						</Typography>
					</Paper>
					<Paper
						className='token'
						data-aos='zoom-in'>
						<img
							src={charity}
							width={50}
							height={50}
							alt='charity'
						/>
						<Typography
							variant='h4'
							sx={{ width: "100%" }}>
							Donate
						</Typography>
						<Typography
							variant='body2'
							sx={{ width: "100%", mt: "10px" }}>
							Inspire creators and Tomo’s fam with rewards.
						</Typography>
					</Paper>
					<Paper
						className='token'
						data-aos='zoom-in'>
						<img
							src={star}
							width={50}
							height={50}
							alt='star'
						/>
						<Typography
							variant='h4'
							sx={{ width: "100%" }}>
							Boost
						</Typography>
						<Typography
							variant='body2'
							sx={{ width: "100%", mt: "10px" }}>
							Make the most of the platform with purchases and boosters.
						</Typography>
					</Paper>
				</Box>
			</Container>
		</Box>
	);
};

export default Token;
