import { Container, Typography } from "@mui/material";

import cat1 from "../../assets/story/cat1.png";
import cat1Webp from "../../assets/story/cat1.webp";
import cat2 from "../../assets/story/cat2.png";
import cat2Webp from "../../assets/story/cat2.webp";

const Story = () => {
	return (
		<section
			id='story-section'
			className='story-section'>
			<div className='story__wrapper'>
				<Container>
					<div className='story__row'>
						<div
							className='story__col story__col-text'
							data-aos='fade-right'>
							<div className='story__col-text-wrap'>
								<Typography
									variant='h2'
									className='story__title'
									mb={5}>
									About
								</Typography>
								<Typography
									variant='body2'
									className='story__text'
									mb={3}>
									&nbsp;&nbsp;It all started in Japan. Centuries ago, a stray cat beckoned Ii Naotaka, the lord samurai of the Hikone domain, at the temple gate. The man came in, got saved from a thunderstorm, and decided to build a temple in honor of his savior.
								</Typography>
								<Typography
									variant='body2'
									className='story__text'>
									&nbsp;&nbsp;The cat was named Maneki Neko and started bringing fortune, wealth, and prosperity to people who pet it.
								</Typography>
							</div>
						</div>
						<div
							className='story__col story__col-img'
							data-aos='fade-left'>
							<picture>
								<source
									type='image/webp'
									srcSet={cat1Webp}
								/>
								<img
									loading='lazy'
									src={cat1}
									alt='Tim The Cat'
								/>
							</picture>
						</div>
					</div>
					<div className="story__row">
						<div
							className='story__col story__col-img'
							data-aos='fade-right'>
							<picture>
								<source
									type='image/webp'
									srcSet={cat2Webp}
								/>
								<img
									loading='lazy'
									src={cat2}
									alt='Tim The Cat'
								/>
							</picture>
						</div>
						<div
							className='story__col story__col-text'
							data-aos='fade-left'>
							<div className='story__col-text-wrap'>
								<Typography
									variant='body2'
									className='story__text'
									mb={3}>
									&nbsp;&nbsp;In 2024, history repeated itself. Maneki Neko’s descendant beckoned a group of online users at the Web 3 realms. They came in, got rid of stress, and created a Tamagotchi-inspired game in honor of their new friend.
								</Typography>
								<Typography
									variant='body2'
									className='story__text'
									mb={3}>
									&nbsp;&nbsp;Now the cat named Tomo brings fortune and luck to people who pet it. Just embrace it with love, hear it purr, and enjoy rewards.
								</Typography>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</section>
	);
};

export default Story;
