import { Container, Box } from "@mui/material";

import DOMPurify from 'dompurify';
import { useContext } from "react";
import { SiteInfocontext } from "../../../helpers/context";

const SafeHtml = ({ html, tagName = "div", ...typographyProps }) => {
	const Tag = tagName;
	const sanitizedHtml = DOMPurify.sanitize(html);
	return (
		<Tag dangerouslySetInnerHTML={{ __html: sanitizedHtml }} {...typographyProps}></Tag>
	);
};

const Story = () => {
	const { state } = useContext(SiteInfocontext);


	return (
		<section
			id='the-story-section'
			className='story-section'>
			<div className='story__wrapper'>
				<Container>
					<div className='story__row'>
						<div
							className='story__col story__col-text'
							data-aos='fade-right'>
							<div className='story__col-text-wrap'>
								{state?.info.story_descr1 && (
									<Box className='story__text' mb={3}>
										<SafeHtml html={state?.info.story_descr1} />
									</Box>
								)}
							</div>
						</div>
						<div
							className='story__col story__col-img'
							data-aos='fade-left'>
							<picture>
								<source
									type='image/webp'
									srcSet={state?.info.story_image1_webp}
								/>
								<img
									loading='lazy'
									src={state?.info.story_img1}
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
									srcSet={state?.info.story_image2_webp}
								/>
								<img
									loading='lazy'
									src={state?.info.story_img2}
									alt='Tim The Cat'
								/>
							</picture>
						</div>
						<div
							className='story__col story__col-text'
							data-aos='fade-left'>
							<div className='story__col-text-wrap'>
								{state?.info.story_descr2 && (
									<Box className='story__text' mb={3}>
										<SafeHtml html={state?.info.story_descr2} />
									</Box>
								)}
							</div>
						</div>
					</div>
				</Container>
			</div>
		</section>
	);
};

export default Story;
