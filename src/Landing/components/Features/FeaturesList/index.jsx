import { Box, List, ListItem, Typography } from "@mui/material";

import console from "../../../assets/features/console.svg";
import people from "../../../assets/features/people.svg";
import list from "../../../assets/features/list.svg";
import coin from "../../../assets/hero/icon2.svg";

const FeaturesList = () => {
	return (
		<List>
			<ListItem
				data-aos='fade-right'
				sx={{
					padding: "0",
					gap: "35px",
					alignItems: "flex-start",
					mb: {
						xs: "35px",
						md: "25px",
					},
					maxWidth: {
						xs: "100%", // Default
						md: "700px", // Medium breakpoint
					},
				}}>
				<img
					src={console}
					alt='icon'
				/>
				<Box>
					<Typography
						variant='body1'
						sx={{
							fontSize: "clamp(1.15rem, 2vw, 1.7rem)",
							fontWeight: 600,
							mb: "10px",
						}}>
						Easy to Play
					</Typography>
					<Typography variant='body2'>
						No need to install additional apps - get an access through our Telegram-bot
						and start your journey with Tom asap
					</Typography>
				</Box>
			</ListItem>
			<ListItem
				data-aos='fade-right'
				sx={{
					padding: "0",
					gap: "35px",
					alignItems: "flex-start",
					mb: {
						xs: "35px",
						md: "25px",
					},
					maxWidth: {
						xs: "100%", // Default
						md: "700px", // Medium breakpoint
					},
				}}>
				<img
					src={people}
					alt='icon'
				/>
				<Box>
					<Typography
						variant='body1'
						sx={{
							fontSize: "clamp(1.15rem, 2vw, 1.7rem)",
							fontWeight: 600,
						}}>
						Referral program and community
					</Typography>
					<Typography variant='body2'>
						Join the game with your friends and get boosts and bonuses to accelerate
						your points growth, so you'll get your first NFTs in the shortest time
					</Typography>
				</Box>
			</ListItem>
			<ListItem
				data-aos='fade-right'
				sx={{
					padding: "0",
					gap: "35px",
					alignItems: "flex-start",
					mb: {
						xs: "35px",
						md: "25px",
					},
					maxWidth: {
						xs: "100%", // Default
						md: "700px", // Medium breakpoint
					},
				}}>
				<img
					src={list}
					alt='icon'
				/>
				<Box>
					<Typography
						variant='body1'
						gap={"10px"}
						sx={{
							fontSize: "clamp(1.15rem, 2vw, 1.7rem)",
							fontWeight: 600,
							mb: "10px",
							display: "flex",
							alignItems: "flex-start",
							flexDirection: {
								xs: "column",
								sm: "row",
							},
						}}>
						Quests and tasks
						<span className='coming-soon__label'>Coming Soon</span>
					</Typography>
					<Typography variant='body2'>
						Want to get the unique features for your Tom? Go through quests from us and
						acquire unique clothes and accessories, boosts and bonuses!
					</Typography>
				</Box>
			</ListItem>
			<ListItem
				data-aos='fade-right'
				sx={{
					padding: "0",
					gap: "35px",
					alignItems: "flex-start",
					mb: {
						xs: "35px",
						md: "25px",
					},
					maxWidth: {
						xs: "100%", // Default
						md: "700px", // Medium breakpoint
					},
				}}>
				<img
					src={coin}
					alt='icon'
				/>
				<Box>
					<Typography
						variant='body1'
						gap={"10px"}
						sx={{
							fontSize: "clamp(1.15rem, 2vw, 1.7rem)",
							fontWeight: 600,
							mb: "10px",
							display: "flex",
							alignItems: "flex-start",
							flexDirection: {
								xs: "column",
								sm: "row",
							},
						}}>
						Mint NFT
						<span className='coming-soon__label'>Coming Soon</span>
					</Typography>
					<Typography variant='body2'>
						Use your points to purchase unique features for your Tom and mint your
						individual NFT.
					</Typography>
				</Box>
			</ListItem>
		</List>
	);
};

export default FeaturesList;
