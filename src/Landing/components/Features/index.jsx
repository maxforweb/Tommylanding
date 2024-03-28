import { Box, Container, Typography } from "@mui/material";

import FeaturesList from "./FeaturesList";
import SocialLink from "../SocialLink";

import iphone from "../../assets/features/iphone.png";
import iphoneWebP from "../../assets/features/iphone.webp";
import arrowIcon from "../../assets/arrow-circle.svg";
import star from "../../assets/star.svg";

import "./features.scss";
import DecorBlock from "../DecorBlock";

const Features = () => {
	return (
		<section
			id='features-section'
			className='features-section'>
			<Container>
				<DecorBlock iconName='starGrad' />
				<Box
					className='features__header'
					data-aos='zoom-in'
					maxWidth={570}
					textAlign='center'
					sx={{
						margin: {
							xs: "0 auto 40px",
							md: "0 auto 85px",
						},
					}}>
					<Typography
						variant='h2'
						mb={{
							xs: "20px",
						}}>
						Features
					</Typography>
					<Typography variant='body3'>
						Make Tomo the happiest cat on Earth Play and get rewards
					</Typography>
				</Box>
				<Box
					className='features__row'
					pb={"110px"}>
					<Box className='features__item'>
						<FeaturesList />
						<Box
							data-aos='fade-right'
							sx={{
								display: "flex",
								alignItems: "center",
							}}>
							<Typography
								variant='body3'
								mr={3}>
								Follow us:
							</Typography>
							<Box
								sx={{
									display: "flex",
									gap: "12px",
								}}>
								<SocialLink
									href='#'
									text='X'
								/>
								<SocialLink
									href='#'
									text='TG'
								/>
							</Box>
						</Box>
					</Box>
					<Box
						className='features__item'
						data-aos='fade-left'
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<picture>
							<source srcSet={iphoneWebP} />
							<img
								className='features__phone'
								src={iphone}
								alt='cat'
							/>
						</picture>
						<a
							className='btn btn-sm btn-transparent'
							href='#'>
							<span>Telegram bot</span>
							<span className='btn__icon'>
								<img
									src={arrowIcon}
									alt='arrow'
								/>
							</span>
						</a>
						<img
							className='dec dec-star'
							src={star}
							alt=''
						/>
					</Box>
				</Box>
			</Container>
		</section>
	);
};
export default Features;
