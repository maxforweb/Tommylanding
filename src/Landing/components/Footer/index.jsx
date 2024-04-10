import { Box, Typography } from "@mui/material";

import logo from "../../assets/logo.png";
import catWebP from "../../assets/hero-cat.webp";
import SocialLink from "../SocialLink";
import DecorBlock from "../DecorBlock";

import "./footer.scss";

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
					left: "0",
					top: "0",
					transform: "rotate(-75deg)",
					opacity: 1,
				}}
			/>
			<footer className='footer footer__wrapper'>
				<Box className='footer__grid'>
					<Box className='footer__logo'>
						<img
							src={logo}
							alt='Crypto Tom'
						/>
					</Box>
					<Box className='footer__socials'>
						<SocialLink
							href='https://twitter.com/TomoCatSol'
							text='X'
						/>
						<SocialLink
							href='https://t.me/tomocat_sol'
							text='TG'
						/>
					</Box>
					<Box className='footer__text'>
						<Typography
							sx={{
								fw: "400",
								fontSize: "clamp(1rem, 1.5vw, 1.5rem)",
								lineHeight: "140%",
							}}>
							Start now!
						</Typography>
						<Typography
							sx={{
								fw: "400",
								fontSize: "clamp(1rem, 1.5vw, 1.5rem)",
								lineHeight: "140%",
							}}>
							Let’s be friends and have fun! I’m waiting for you.
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
							© 2024 Crypto Tom • All Rights Reserved
						</Typography>
					</Box>
				</Box>
			</footer>
		</Box>
	);
};

export default Footer;
