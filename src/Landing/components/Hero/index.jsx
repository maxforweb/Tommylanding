import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import "./hero.scss";

import HeroProgress from "./HeroProgress";
import arrowIcon from "../../assets/arrow-circle.svg";
import heroIcon1 from "../../assets/hero/icon1.svg";
import heroIcon2 from "../../assets/hero/icon2.svg";
import heroIcon3 from "../../assets/hero/icon3.svg";

import { useContext } from "react";
import { SiteInfocontext } from "../../../helpers/context";

const Hero = () => {
	const { state } = useContext(SiteInfocontext);

	const heroTitleText = state?.info.site_h1 || "Tomo Cat";
	const heroSubtitileText = state?.info.site_subtitle || "Next-Gen Tamagotchi";
	return (
		<section className='hero'>
			<Container className='hero__container'>
				<Box className='hero__body'>
					<div
						className='hero__header'
						mb={6}>
						<Box>
							<Typography
								variant='h1'
								data-aos='bounce'
								sx={{
									textAlign: "center",
								}}>
								{heroTitleText}
							</Typography>
							<Typography
								variatn='body2'
								data-aos='bounce'
								sx={{
									textAlign: "center",
								}}>
								{heroSubtitileText}
							</Typography>
						</Box>
					</div>
					<div className='hero__actions'>
						<HeroProgress />
						<div
							data-aos='bounce'
							data-aos-offset='-300'>
							<Box className='hero__buttons'>
								<a
									className='btn'
									href={state?.info.play_link}>
									<span>{state?.info.play_link_name}</span>
									<span className='btn__icon'>
										<img
											src={arrowIcon}
											alt='arrow'
										/>
									</span>
								</a>
								<a
									className='btn'
									href={state?.info.bot_link}>
									<span>{state?.info.bot_link_name}</span>
									<span className='btn__icon'>
										<img
											src={arrowIcon}
											alt='arrow'
										/>
									</span>
								</a>
							</Box>
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
									srcSet={state?.info.hero__body_img_main_webp}
									media='(min-width: 1024.98px)'
								/>
								<img
									src={state?.info.hero__body_img_main}
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
