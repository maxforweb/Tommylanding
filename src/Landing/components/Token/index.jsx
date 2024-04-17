import { Box, Container, Paper, Typography } from "@mui/material";
import DecorBlock from "../DecorBlock";

import { useContext } from "react";
import { SiteInfocontext } from "../../../helpers/context";

const Token = () => {
	const { state } = useContext(SiteInfocontext);
	return (
		<Box
			id='token-utility-section'
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
					{state?.info.utility_title}
				</Typography>
				<Box sx={{ mt: "50px" }} className='token-stack'>
					{state?.utility.map((item, index) => (
						<Paper key={index} className='token' data-aos='zoom-in'>
							<img
								src={item.icon}
								width={50}
								height={50}
								alt={item.name}
							/>
							<Typography
								variant='h4'
								color='#fff'
								sx={{ width: "100%" }}>
								{item.name}
							</Typography>
							<Typography
								variant='body2'
								sx={{ width: "100%", mt: "10px" }}>
								{item.descr}
							</Typography>
						</Paper>
					))}
				</Box>
			</Container>
		</Box>
	);
};

export default Token;
