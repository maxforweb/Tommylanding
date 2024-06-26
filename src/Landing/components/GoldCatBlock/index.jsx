import { Box, Container, Typography } from "@mui/material";
import DecorBlock from "../DecorBlock";
import "./gold.scss";

import arrowIcon from "../../assets/arrow-circle.svg";

import { useContext } from "react";
import { SiteInfocontext } from "../../../helpers/context";

const GoldCatBlock = () => {
	const { state } = useContext(SiteInfocontext);
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
								mb: { xs: 4, sm: 3 },
								zIndex: 5,
							}}>
							{state?.info.site_befriend_title}
						</Typography>
						<Typography
							variant='body3'
							textAlign='center'
							width='100%'
							zIndex={3}
							position={"relative"}
							maxWidth={425}
							sx={{
								margin: "0 auto 2rem",
								zIndex: 5,
							}}>
							{state?.info.site_befriend_subtitle}
						</Typography>
						<Box
							display={"flex"}
							justifyContent={"center"}>
							<a
								className='btn'
								href={state?.info.solana_fam_link}>
								<span>{state?.info.solana_fam_link_name}</span>
								<span className='btn__icon'>
									<img
										src={arrowIcon}
										alt='arrow'
									/>
								</span>
							</a>
						</Box>
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
							src={state?.info.gold_char_image}
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
