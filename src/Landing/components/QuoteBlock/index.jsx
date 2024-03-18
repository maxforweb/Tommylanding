import { Grid, Typography, Box } from "@mui/material";
import DefaultContainer from "../default/Container";

import quote from "./img/quote.png";

const Quote = () => {
	return (
		<DefaultContainer padding={{ lg: "0 13rem", md: "0 30px", xs: "0 20px" }}>
			<Grid
				data-aos='zoom-in'
				container
				spacing={0}
				sx={{
					m: "0 auto",
					mt: "36px",
					p: { lg: "50px 90px", md: "35px", xs: "25px" },
					border: "3px solid #fff",
					borderRadius: "30px",
					width: {
						xs: "100%",
						md: "90%",
					},
					bgcolor: "rgba(0, 0, 0, 0.6)",
				}}>
				<Grid
					item
					md={2}
					xs={12}
					display='flex'
					justifyContent={{ xs: "start", md: "end" }}
					alignItems={"end"}
					sx={{
						pr: { md: "40px" },
						mb: { xs: "25px", md: "0" },
					}}>
					<Box component="img" src={quote} alt="quote icon" sx={{
						width: {
							xs: "50px",
							md: "70px",
							lg: "90px",
							xl: "110px"
						},
						height: {
							xs: "50px",
							md: "70px",
							lg: "90px",
							xl: "110px"
						}
					}} />
				</Grid>
				<Grid
					item
					md={10}
					xs={12}>
					<Typography variant='body1' sx={{
						fontSize: "clamp(1.15rem, 2vw, 1.5rem)",
					}}>
						With Tim The Cat, we have created a revolutionary digital currency that is designed for simplicity, security, and accessibility.
					</Typography>
					<Typography
						variant='body1'
						sx={{ mt: "20px", fontSize: "clamp(1.15rem, 2vw, 1.5rem)", }}>
						Our goal is to provide a seamless crypto experience for everyone. Whether you are an experienced trader or a curious beginner, Talking Tom is here to meet your needs and assist you in exploring the world of digital currencies.
					</Typography>
				</Grid>
			</Grid>
		</DefaultContainer>
	);
};

export default Quote;
