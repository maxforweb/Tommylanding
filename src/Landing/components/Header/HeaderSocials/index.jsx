import { List, ListItem } from "@mui/material";
import SocialLink from "../../SocialLink";

const HeaderSocials = () => {
	return (
		<List className='header__socials'>
			<ListItem>
				<SocialLink
					href='https://twitter.com/TomoCatSol'
					text='X'
				/>
			</ListItem>
			<ListItem>
				<SocialLink
					href='https://t.me/tomocat_sol'
					text='TG'
				/>
			</ListItem>
		</List>
	);
};

export default HeaderSocials;
