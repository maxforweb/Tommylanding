import { Box, Typography, ListItem } from "@mui/material";

const DistItem = ({ color, percent, text }) => {
	return (
		<ListItem
			sx={{
				padding: 0,
				display: "flex",
				gap: "25px",
				position: "relative",
				zIndex: 4,
				mb: {
					xs: 2,
					sm: 3,
				},
			}}
			data-aos='fade-up'>
			<Box
				component='span'
				sx={{
					bgcolor: color,
					width: {
						xs: 30,
						sm: 39,
					},
					height: {
						xs: 30,
						sm: 39,
					},
					borderRadius: "50%",
					display: "block",
					boxShadow: "inset 3px -3px 2px 0px rgba(0,0,0,0.25)",
				}}></Box>
			<Typography
				variant='body2'
				sx={{
					color: "#fff",
					fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
					fontWeight: 600,
					display: "inline-block",
					lineHeight: "130%",
					marginLeft: 2,
				}}>
				{percent} - {text}
			</Typography>
		</ListItem>
	);
};

export default DistItem;
