import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import "./hero.scss";

import HeroProgress from "./HeroProgress";
import catWebP from "../../assets/hero-cat.webp";
import catWebPSm from "../../assets/hero-cat-sm.webp";
import arrowIcon from "../../assets/arrow-circle.svg";
import heroIcon1 from "../../assets/hero/icon1.svg";
import heroIcon2 from "../../assets/hero/icon2.svg";
import heroIcon3 from "../../assets/hero/icon3.svg";

const Hero = () => {
	return (
		<section className='hero'>
			<Container className='hero__container'>
				<Box className='hero__body'>
					<div
						className='hero__header'
						mb={6}>
						<Typography
							variant='h1'
							data-aos='bounce'
							sx={{
								textAlign: "center",
							}}>
							Tomo The Cat
						</Typography>
						<Typography
							variatn='body2'
							data-aos='bounce'
							sx={{
								textAlign: "center",
							}}>
							Next-Gen Tamagotchi
						</Typography>
					</div>
					<div className='hero__actions'>
						<HeroProgress />
						<div
							data-aos='bounce'
							data-aos-offset='-300'>
							<a
								className='btn'
								href='https://prodtest1.space/'>
								<span>Let’s play</span>
								<span className='btn__icon'>
									<img
										src={arrowIcon}
										alt='arrow'
									/>
								</span>
							</a>
						</div>
					</div>
					<div
						className='hero__body-cat'
						style={{
							transformStyle: "preserve-3d",
						}}>
						<motion.div
							initial={{
								y: 7,
								rotate: 0,
							}}
							animate={{
								y: [0, -30, 0],
								rotate: [0, 2, -4, 0],
							}}
							transition={{
								duration: 5,
								repeat: Infinity,
								repeatType: "mirror",
								ease: "easeInOut",
							}}
							className='hero__body-decoration'>
							<Typography
								variant='body2'
								textAlign={"center"}
								fontSize={16}
								lineHeight={1.3}
								data-aos='bounce'
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "10px",
									flexDirection: "column",
								}}>
								<img
									src={heroIcon1}
									alt='icon'
								/>
								Pet the Cat
							</Typography>
						</motion.div>
						<div
							className='hero__body-img-main'
							data-aos='bounce'>
							<picture>
								<source
									srcSet={catWebPSm}
									media='(max-width: 1024px)'
								/>
								<source
									srcSet={catWebP}
									media='(min-width: 1024.98px)'
								/>
								<img
									src={catWebP}
									alt='cat'
								/>
							</picture>
						</div>
						<div
							className='hero__body-decoration'
							style={{
								trransformStyle: "preserve-3d",
							}}>
							<motion.div
								initial={{
									y: 10,
									rotate: 0,
								}}
								animate={{
									y: [0, -15, 0],
									rotate: [0, -3, 1, 0],
								}}
								transition={{
									duration: 6,
									repeat: Infinity,
									repeatType: "mirror",
									ease: "easeInOut",
								}}>
								<Typography
									variant='body2'
									textAlign={"center"}
									fontSize={16}
									lineHeight={1}
									mb={7}
									data-aos='bounce'>
									<img
										src={heroIcon2}
										alt='icon'
									/>
									Earn Points
								</Typography>
							</motion.div>
							<motion.div
								initial={{
									y: 0,
									rotate: 0,
								}}
								animate={{
									y: [0, 30, 0],
									rotate: [0, 2, -2, 0],
								}}
								transition={{
									duration: 7,
									repeat: Infinity,
									repeatType: "mirror",
									ease: "easeInOut",
								}}>
								<Typography
									variant='body2'
									textAlign={"center"}
									fontSize={16}
									lineHeight={1.3}
									data-aos='bounce'
									sx={{
										display: "flex",
										alignItems: "center",
										gap: "10px",
										flexDirection: "column",
									}}>
									<img
										src={heroIcon3}
										alt='icon'
									/>
									Invite Friends
								</Typography>
							</motion.div>
						</div>
					</div>
				</Box>
			</Container>
		</section>
	);
};

export default Hero;
