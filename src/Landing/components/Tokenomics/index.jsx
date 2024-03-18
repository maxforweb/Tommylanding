import DefaultContainer from "../default/Container";
import TokenomicsBox from "./TokenomicsBox";
import { motion } from "framer-motion"

import { Box, Typography } from "@mui/material";

import star from "../../assets/star.svg";
import coinLg from "../../assets/coin-lg.png";
import coinSm from "../../assets/coin-sm.png";
import coinLgOpacity from "../../assets/coin-lg-opacity.png";

const Tokenomics = () => {
	return (
		<section id="tokenomics-section">
			<DefaultContainer padding={{ lg: "0 15rem", md: "0 30px", xs: "0 20px" }}>
				<Box
					className='tokenomics__wrapper'
					sx={{
						mt: {
							xs: "70px",
							lg: "180px",
						},
						mb: {
							xs: "70px",
							lg: "180px",
						},
					}}>
					<motion.div
						initial={{
							y: 10,
							rotate: 0
						}}
						animate={{
							y: [0, -15, 0],
							rotate: [0, -3, 1, 0],
						}}
						transition={{
							duration: 6,
							repeat: Infinity,
							repeatType: "mirror",
							ease: "easeInOut"
						}}
						className='dec dec-star'
					>
						<img
							className='dec dec-star'
							src={star}
							alt="star"
						/>
					</motion.div>
					<motion.div
						initial={{
							y: 0,
							rotate: 0
						}}
						animate={{
							y: [0, 30, 0],
							rotate: [0, 2, -2, 0],
						}}
						transition={{
							duration: 7,
							repeat: Infinity,
							repeatType: "mirror",
							ease: "easeInOut"
						}}
						className='dec dec-coin-lg'
					>
						<img
							className='dec dec-coin-lg'
							src={coinLg}
							alt="coin"
						/>
					</motion.div>
					<motion.div
						initial={{
							y: 7,
							rotate: 0
						}}
						animate={{
							y: [0, -30, 0],
							rotate: [0, 2, -4, 0],
						}}
						transition={{
							duration: 5,
							repeat: Infinity,
							repeatType: "mirror",
							ease: "easeInOut"
						}}
						className='dec dec-coin-lg-op'>
						<img
							className='dec dec-coin-lg-op'
							src={coinLgOpacity}
							alt="coin"
						/>
					</motion.div>
					<motion.div
						initial={{
							y: 7,
							rotate: 0
						}}
						animate={{
							y: [0, -30, 0],
							rotate: [0, 2, -4, 0],
						}}
						transition={{
							duration: 5,
							repeat: Infinity,
							repeatType: "mirror",
							ease: "easeInOut"
						}}
						className='dec dec-coin-sm'>
						<img
							className='dec dec-coin-sm'
							src={coinSm}
							alt="coin"
						/>
					</motion.div>
					<Typography
						variant='h2'
						textAlign='center'
						width='100%'
						zIndex={4}
						sx={{ mb: "40px", position: "relative" }}>
						Tokenomics
					</Typography>
					<Box className='tokenomics'>
						<TokenomicsBox
							title='Total Supply:'
							value='1 000 000 000 $TOMCAT'
						/>

					</Box>
				</Box>
			</DefaultContainer>
		</section>
	);
};

export default Tokenomics;
