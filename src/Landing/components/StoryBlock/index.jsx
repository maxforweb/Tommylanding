import { Box, Typography } from "@mui/material";
import ellipse from "../../decoration/ellipse.svg";
import cat from "./img/cat.jpg";
import catSm from "./img/cat-sm.jpg";

const Story = () => {
	return (
		<>
			<Box>
				<div className='story__wrapper'>
					<div className='story__item'>
						<Box>
							<Typography
								variant='h2'
								sx={{ position: "relative" }}>
								<img
									className='dec-ellipse'
									src={ellipse}
								/>
								The Story
							</Typography>
							<Typography
								variant='body2'
								sx={{ mt: "45px", textIndent: "25px" }}>
								On a cold, dark evening, Raj, the founder of Solana, discovered a
								shivering, homeless cat under a cardboard box during a walk with his
								dog, Myro.
							</Typography>
							<Typography
								variant='body2'
								sx={{ textIndent: "25px" }}>
								Guided by his profound love for animals, Raj took the cat home,
								naming him Tom, and provided care, warmth, and toys, showcasing his
								affection.
							</Typography>
							<Typography
								variant='body2'
								sx={{ textIndent: "25px" }}>
								As Solana grew, Tom, always by Raj's side during work and Zoom
								calls, became a beloved mascot of the innovative Solana community.
							</Typography>
							<Typography
								variant='body2'
								sx={{ textIndent: "25px" }}>
								Inspired by Tom's presence, the community launched "Tom The Cat
								Token" and a game, allowing users to engage with Tom virtually while
								supporting homeless cats.
							</Typography>
							<Typography
								variant='body2'
								sx={{ textIndent: "25px" }}>
								This initiative not only celebrated Tom but also reflected the
								community's commitment to animal welfare, turning Raj's rescue of
								Tom into a global mission to help animals in need through the
								strength of the Solana community.
							</Typography>
						</Box>
					</div>
					<div className='story__item'>
						<picture>
							<source
								media='(min-width: 1024px)'
								srcSet={cat}
							/>
							<source
								media='(max-width: 768px)'
								srcSet={catSm}
							/>
							<img
								src={cat}
								alt=''
							/>
						</picture>
					</div>
				</div>
			</Box>
		</>
	);
};

export default Story;
