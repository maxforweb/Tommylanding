import DefaultContainer from "../default/Container";

import { Box, Typography } from "@mui/material";

import logo from "../../assets/logo.svg";
import catWebP from "../../assets/hero-cat.webp";
import catGold from "../../assets/gold-cat.png";
import SocialLink from "../SocialLink";


const Footer = () => {
	return (
		<Box sx={{
			mt: {
				xs: "0",
				lg: "-100px",
			},
		}}>
			<Box className="footer-gold-cat" sx={{
				display: "flex",
				justifyContent: "center",
			}}>
				<img
					data-aos="bounce"
					data-aos-offset="100"
					src={catGold}
					alt="Golden Cat"
					loading="lazy"
				/>
			</Box>
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
							<SocialLink href="#" text="X" />
							<SocialLink href="#" text="TG" />
						</Box>
						<Box className='footer__text'>
							<Typography variant='body1' mb={2}>
								Tim the Cat: the cutest advisers of Solana is waiting for you!
							</Typography>
							<Typography variant='body1'>

								Play the games, help Tim and his friends and discover the first Tamagotchi game built on Solana
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
		</Box >
	);
};

export default Footer;
