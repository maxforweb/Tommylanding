import { List, ListItem } from "@mui/material";
import HeaderLink from "../HeaderLink";
import { useContext } from "react";
import { SiteInfocontext } from "../../../../helpers/context";

const Navigation = ({ isActive, onCloseMenu }) => {
  const { state } = useContext(SiteInfocontext);

  return (
    <nav className={`header__nav ${isActive ? 'active' : ''}`}>
      <List className="header__nav-list">
        {state?.menu.map((item, index) => (
          <ListItem key={index}>
            <HeaderLink
              className="header__nav-link"
              text={item.name}
              target={`#${item.name.toLowerCase().replace(/\s+/g, '-')}-section`}
              onClick={onCloseMenu}
            />
          </ListItem>
        ))}
      </List>
    </nav>
  );
};

export default Navigation;