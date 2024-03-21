import { Container, Typography } from "@mui/material";

import cat1 from "../../assets/story/cat1.png";
import cat1Webp from "../../assets/story/cat1.webp";
import cat2 from "../../assets/story/cat2.png";
import cat2Webp from "../../assets/story/cat2.webp";
import cat3 from "../../assets/story/cat3.png";
import cat3Webp from "../../assets/story/cat3.webp";

import SocialLink from "../SocialLink";
import DecorBlock from "../DecorBlock";

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
								<DecorBlock iconName='ellipse' />
								<Typography
									variant='h2'
									className='story__title'
									mb={5}>
									The Story
								</Typography>
								<Typography
									variant='body2'
									className='story__text'
									mb={3}>
									On a cold, dark evening, Raj, the founder of Solana, discovered
									a shivering, homeless cat under a cardboard box during a walk
									with his dog, Myro.
								</Typography>
								<Typography
									variant='body2'
									className='story__text'>
									Moved by the sight and guided by his love for animals, Raj took
									the cat home, naming him Tom, and provided care, warmth, and
									toys, showcasing his affection.
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
								/>
							</picture>
							<DecorBlock iconName='moon' />
							<DecorBlock iconName='starSingle' />
							<DecorBlock iconName='starDouble' />
						</div>
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
								/>
							</picture>
							<DecorBlock iconName='heartSm' />
							<DecorBlock iconName='robo' />
							<DecorBlock iconName='heartLg' />
							<DecorBlock iconName='car' />
						</div>
						<div
							className='story__col story__col-text'
							data-aos='fade-left'>
							<div className='story__col-text-wrap'>
								<Typography
									variant='body2'
									className='story__text'>
									As Solana grew, Tim, always by Raj's side during work calls,
									became a beloved mascot of the Solana community.his dog, Myro.
								</Typography>
								<ul>
									<li>
										<SocialLink
											href='#'
											text='X'
										/>
									</li>
									<li>
										<SocialLink
											href='#'
											text='TG'
										/>
									</li>
								</ul>
								<Typography
									variant='body2'
									className='story__text'>
									To celebrate Tim, the Solana community launched "Tim The Cat
									Token" and a game!
								</Typography>
							</div>
						</div>
						<div
							className='story__col story__col-text'
							data-aos='fade-right'>
							<div className='story__col-text-wrap'>
								<Typography
									variant='body2'
									className='story__text'
									mb={3}>
									Just as Raj did when he rescued and cared for Tom, within the
									game, players can take care of their Tom by petting, feeding,
									grooming, and accessorizing, just as Raj did when he rescued and
									cared for Tom!
								</Typography>
								<Typography
									variant='body2'
									className='story__text'>
									In addition to taking care of your Tom, you'll also earn rewards
									for completing quests, forming partnerships, and engaging in
									many other exciting activities within the game!
								</Typography>
							</div>
						</div>
						<div
							className='story__col story__col-img'
							data-aos='fade-left'>
							<picture>
								<source
									type='image/webp'
									srcSet={cat3Webp}
								/>
								<img
									loading='lazy'
									src={cat3}
								/>
							</picture>
							<DecorBlock iconName='coin' />
							<DecorBlock iconName='cup' />
							<DecorBlock iconName='message' />
						</div>
					</div>
				</Container>
			</div>
		</section>
	);
};

export default Story;
