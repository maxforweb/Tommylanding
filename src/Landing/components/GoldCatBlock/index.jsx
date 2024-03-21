import { Box, Container, Typography } from "@mui/material";
import DecorBlock from "../DecorBlock";
import "./gold.scss";

import catGold from "../../assets/gold-cat.png";

const GoldCatBlock = () => {
	return (
		<section className='gold-cat'>
			<Container
				sx={{
					position: "relative",
				}}>
				<DecorBlock
					iconName='heartLg'
					customStyles={{
						width: "72px",
						height: "62px",
						transform: "rotate(-45deg)",
						top: "20%",
						left: "0",
						opacity: 0.7,
					}}
				/>
				<DecorBlock
					iconName='car'
					customStyles={{
						width: "49px",
						height: "35px",
						bottom: "5%",
						left: "0",
					}}
				/>
				<DecorBlock
					iconName='ellipseFull'
					customStyles={{
						width: "200px",
						height: "200px",
						top: "7%",
						left: "auto",
						right: "-10%",
					}}
				/>
				<Box className='gold-cat__row'>
					<Box
						className='gold-cat__content'
						data-aos='zoom-in-down'>
						<DecorBlock
							iconName='petFood'
							customStyles={{
								width: "87px",
								height: "87px",
								bottom: "-50%",
								left: "auto",
								right: "-10%",
							}}
						/>
						<DecorBlock
							iconName='coin'
							customStyles={{
								width: "53px",
								height: "37px",
								top: "0%",
								right: "0",
								left: "auto",
							}}
						/>
						<Typography
							variant='h2'
							textAlign='center'
							width='100%'
							zIndex={3}
							position={"relative"}
							sx={{
								mb: { xs: 4, sm: 7 },
								zIndex: 5,
							}}>
							Tim the Cat
						</Typography>
						<Typography
							variant='body3'
							textAlign='center'
							width='100%'
							zIndex={3}
							position={"relative"}
							maxWidth={495}
							sx={{
								margin: "0 auto",
								zIndex: 5,
							}}>
							Play the games, help Tim and his friends and discover the first
							Tamagotchi game built on Solana
						</Typography>
					</Box>
					<Box
						className='gold-cat__img'
						sx={{
							display: "flex",
							justifyContent: "center",
						}}>
						<img
							data-aos='bounce'
							data-aos-offset='100'
							src={catGold}
							alt='Golden Cat'
							loading='lazy'
						/>
					</Box>
				</Box>
			</Container>
		</section>
	);
};

export default GoldCatBlock;
