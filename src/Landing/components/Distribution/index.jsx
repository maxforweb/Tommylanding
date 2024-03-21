import { Box, Container, Typography, List } from "@mui/material";

import "./distribution.scss";
import dist from "../../assets/distribution.svg";
import DistItem from "./DistItem";
import Tokenomics from "../Tokenomics";
import DecorBlock from "../DecorBlock";

const Distribution = () => {
	return (
		<section id="tokenomics-section" className='distribution-section'>
			<Container
				sx={{
					padding: { xs: "0 20px" },
					position: "relative",
				}}>
				<DecorBlock
					iconName='starGrad'
					customStyles={{
						left: "auto",
						right: "-18%",
						bottom: "auto",
						top: "0",
						opacity: 1,
					}}
				/>
				<Typography
					variant='h2'
					textAlign={"center"}
					sx={{
						position: "relative",
						zIndex: 3,
						mb: { xs: 6, md: 14 },
					}}>
					Tokenоmics & Distribution
				</Typography>
				<Box className='distribution-content'>
					<Tokenomics />
					<Box
						data-aos='zoom-in'
						className='distribution-diagram'>
						<Box
							component='img'
							src={dist}
							alt='distribution'
							loading='lazy'
							sx={{
								width: "100%",
								maxWidth: 820,
								display: "block",
							}}
						/>
					</Box>
					<Box className='distribution-list'>
						<List
							sx={{
								position: "relative",
							}}>
							<DistItem
								color='var(--_cyan-clr)'
								percent='27%'
								text='Community Pre-sale'
							/>
							<DistItem
								color='var(--_blue-clr)'
								percent='6%'
								text='Private Sale'
							/>
							<DistItem
								color='var(--_purple-clr)'
								percent='40%'
								text='Ecosystem Reserves'
							/>
							<DistItem
								color='var(--_purple-lighter-clr)'
								percent='17%'
								text='Marketing and Rewards'
							/>
							<DistItem
								color='var(--_pink-clr)'
								percent='10%'
								text='Early Contributors'
							/>

							<DecorBlock
								iconName='starGrad'
								customStyles={{
									left: "-18%",
									bottom: "-5%",
									opacity: 0.7,
								}}
							/>
						</List>
					</Box>
				</Box>
			</Container>
		</section>
	);
};

export default Distribution;
