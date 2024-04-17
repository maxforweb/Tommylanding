import { List, ListItem } from "@mui/material";
import SocialLink from "../../SocialLink";

import { useContext } from "react";
import { SiteInfocontext } from "../../../../helpers/context";

const HeaderSocials = () => {
	const { state } = useContext(SiteInfocontext);
	return (
		<List className='header__socials'>
			{state?.socials.map((social, index) => (
				<ListItem key={index}>
					<SocialLink
						href={social.link}
						text={social.name}
					/>
				</ListItem>
			))}
		</List>
	);
};

export default HeaderSocials;
