import DefaultContainer from "../default/Container";

import { Box, Typography, Link } from "@mui/material";

import logo from "../../assets/logo.svg";
import catWebP from "../../assets/hero-cat.webp";
import catGold from "../../assets/gold-cat.png";

const Footer = () => {
	return (
		<Box>
			<Box className="footer-gold-cat" data-aos="bounce" sx={{
				display: "flex",
				justifyContent: "center",
			}}>
				<img
					src={catGold}
					alt="Golden Cat"
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
							<Link
								aria-label='copy'
								color='primary'
								href='#'
								sx={{
									transition: "background-color 0.3s",
									width: "50px",
									height: "50px",
									display: "inline-flex",
									alignItems: "center",
									justifyContent: "center",
									border: "2px solid #fff",
									color: "#fff",
									fontSize: "16px",
									fontWeight: "600",
									borderRadius: "50%",
									textDecoration: "none",
									"&:hover": {
										backgroundColor: "#292F4F",
									},
								}}>
								X
							</Link>
							<Link
								aria-label='copy'
								color='primary'
								href='#'
								sx={{
									transition: "background-color 0.3s",
									width: "50px",
									height: "50px",
									display: "inline-flex",
									alignItems: "center",
									justifyContent: "center",
									border: "2px solid #fff",
									color: "#fff",
									fontSize: "16px",
									fontWeight: "600",
									borderRadius: "50%",
									textDecoration: "none",
									"&:hover": {
										backgroundColor: "#292F4F",
									},
								}}>
								TG
							</Link>
						</Box>
						<Box className='footer__text'>
							<Typography variant='body2'>
								With Tim The Cat, we have created a revolutionary digital currency that is designed for simplicity, security, and accessibility.
							</Typography>
							<Typography variant='body2'>
								Our goal is to provide a seamless crypto experience for everyone. Whether you are an experienced trader or a curious beginner, Tim The Cat is here to meet your needs and assist you in exploring the world of digital currencies.
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
