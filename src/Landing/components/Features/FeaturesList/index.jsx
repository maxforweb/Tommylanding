import { Box, List, ListItem, Typography } from "@mui/material";

import console from "../../../assets/features/console.svg";
import people from "../../../assets/features/people.svg";
import list from "../../../assets/features/list.svg";
import coin from "../../../assets/features/coin.svg";

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
				<Box maxWidth={'475px'}>
					<Typography
						variant='body1'
						sx={{
							fontSize: "clamp(1.15rem, 2vw, 1.7rem)",
							fontWeight: 600,
							mb: "10px",
						}}>
						Play E123
					</Typography>
					<Typography variant='body2'>
						No additional app needed: start with Telegram.
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
				<Box maxWidth={'475px'}>
					<Typography
						variant='body1'
						sx={{
							fontSize: "clamp(1.15rem, 2vw, 1.7rem)",
							fontWeight: 600,
							mb: "10px",
						}}>
						Referral Program
					</Typography>
					<Typography variant='body2'>
						Invite friends to boost your bonuses and skyrocket the first NFT mint.
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
				<Box maxWidth={'475px'}>
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
						Tasks
						<span className='coming-soon__label'>Coming Soon</span>
					</Typography>
					<Typography variant='body2'>
						Complete catchy quests with Tomo and get fancy clothes, boosts, and bonuses.
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
				<Box maxWidth={'475px'}>
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
						Use rewards to boost your Tim and mint NFTs.
					</Typography>
				</Box>
			</ListItem>
		</List>
	);
};

export default FeaturesList;
