import { useContext } from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import { SiteInfocontext } from "../../../../helpers/context";

const FeaturesList = () => {
	const { state } = useContext(SiteInfocontext);

	return (
		<List>
			{state?.features.map((feature, index) => (
				<ListItem
					key={index}
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
						src={feature.icon}
						alt={feature.name}
					/>
					<Box maxWidth={'475px'}>
						<Typography
							variant='body1'
							sx={{
								fontSize: "clamp(1.15rem, 2vw, 1.7rem)",
								fontWeight: 600,
								mb: "10px",
								display: "flex",
								alignItems: "center",
								gap: feature.soon === 1 ? '10px' : '0',  // Apply gap if 'soon' is exactly 0
							}}>
							{feature.name}
							{feature.soon === 1 && <span className='coming-soon__label'>Coming Soon</span>}
						</Typography>
						<Typography variant='body2'>
							{feature.descr}
						</Typography>
					</Box>
				</ListItem>
			))}
		</List>
	);
};

export default FeaturesList;
