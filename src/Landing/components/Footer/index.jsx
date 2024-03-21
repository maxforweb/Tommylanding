import DefaultContainer from "../default/Container";

import { Box, Typography } from "@mui/material";

import logo from "../../assets/logo.svg";
import catWebP from "../../assets/hero-cat.webp";
import SocialLink from "../SocialLink";
import DecorBlock from "../DecorBlock";

const Footer = () => {
	return (
		<Box
			sx={{
				mt: {
					xs: "0",
					lg: "-100px",
				},
				position: "relative",
			}}>
			<DecorBlock
				iconName='ellipse'
				customStyles={{
					left: "-2%",
					top: "-5%",
					transform: "rotate(-90deg)",
					opacity: 1,
				}}
			/>
			<footer className='footer footer__wrapper'>
				<DefaultContainer padding={{ xl: "0 8.125rem", lg: "0 5rem", xs: "0 20px" }}>
					<Box className='footer__grid'>
						<Box className='footer__logo'>
							<img
								src={logo}
								alt='Crypto Tom'
							/>
						</Box>
						<Box className='footer__socials'>
							<SocialLink
								href='#'
								text='X'
							/>
							<SocialLink
								href='#'
								text='TG'
							/>
						</Box>
						<Box className='footer__text'>
							<Typography
								variant='body1'
								textAlign='center'
								mb={2}>
								The cutest virtual pet supported by Solana community is waiting for
								you!
							</Typography>
						</Box>
						<Box className='footer__cat'>
							<img
								src={catWebP}
								alt='Crypto Tim'
							/>
						</Box>
						<Box className='footer__copyright'>
							<Typography
								variant='body2'
								sx={{ fontWeight: "400", opacity: "0.7" }}>
								© 2024 Crypto Tim • All Rights Reserved
							</Typography>
						</Box>
					</Box>
				</DefaultContainer>
			</footer>
		</Box>
	);
};

export default Footer;
