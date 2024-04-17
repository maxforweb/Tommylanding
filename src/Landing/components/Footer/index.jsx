import { Box, Typography } from "@mui/material";
import SocialLink from "../SocialLink";
import DecorBlock from "../DecorBlock";

import DOMPurify from 'dompurify';
import { useContext } from "react";
import { SiteInfocontext } from "../../../helpers/context";
import "./footer.scss";

const SafeHtml = ({ html, tagName = "div", ...typographyProps }) => {
	const Tag = tagName;
	const sanitizedHtml = DOMPurify.sanitize(html);
	return (
		<Tag dangerouslySetInnerHTML={{ __html: sanitizedHtml }} {...typographyProps}></Tag>
	);
};

const Footer = () => {
	const { state } = useContext(SiteInfocontext);
	return (
		<Box
			sx={{
				mt: {
					xs: "0",
					lg: "-100px",
				},
				position: "relative",
			}}>
			<DecorBlock
				iconName='ellipse'
				customStyles={{
					left: "0",
					top: "0",
					transform: "rotate(-75deg)",
					opacity: 1,
				}}
			/>
			<footer className='footer footer__wrapper'>
				<Box className='footer__grid'>
					<Box className='footer__logo'>
						<img
							src={state?.info.header__logo}
							alt='Tomo Cat'
						/>
					</Box>
					<Box className='footer__socials'>

						{state?.socials.map((social, index) => (
							<SocialLink
								key={index}
								href={social.link}
								text={social.name}
							/>
						))}
					</Box>
					<Box className='footer__text'>
						<SafeHtml html={state?.info.footer_descr} />
					</Box>
					<Box className='footer__cat'>
						<img
							src={state?.info.footer_char_img_webp}
							alt='Crypto Tomo'
						/>
					</Box>
					<Box className='footer__copyright'>
						<Typography
							variant='body2'
							sx={{ fontWeight: "400", opacity: "0.7" }}>
							{state?.info.site_footer_copy}
						</Typography>
					</Box>
				</Box>
			</footer>
		</Box>
	);
};

export default Footer;
