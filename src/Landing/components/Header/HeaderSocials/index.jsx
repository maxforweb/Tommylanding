import { List, ListItem } from "@mui/material";
import SocialLink from "../../SocialLink";

const HeaderSocials = () => {
  return (
    <List className="header__socials">
      <ListItem>
        <SocialLink href="#" text="X" />
      </ListItem>
      <ListItem>
        <SocialLink href="#" text="TG" />
      </ListItem>
    </List>
  );
};

export default HeaderSocials;