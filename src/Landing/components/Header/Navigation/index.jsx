import { List, ListItem } from "@mui/material";
import HeaderLink from "../HeaderLink";

const Navigation = ({ isActive, onCloseMenu }) => {
  return (
    <nav className={`header__nav ${isActive ? 'active' : ''}`}>
      <List className="header__nav-list">
        <ListItem>
          <HeaderLink className="header__nav-link" text="The Story" target="#story-section" onClick={onCloseMenu} />
        </ListItem>
        <ListItem>
          <HeaderLink className="header__nav-link" text="Features" target="#features-section" onClick={onCloseMenu} />
        </ListItem>
        <ListItem>
          <HeaderLink className="header__nav-link" text="Token Utility" target="#token-section" onClick={onCloseMenu} />
        </ListItem>
        <ListItem>
          <HeaderLink className="header__nav-link" text="Roadmap" target="#roadmap-section" onClick={onCloseMenu} />
        </ListItem>
        {/* <ListItem>
          <HeaderLink className="header__nav-link" text="Tokenomics" target="#tokenomics-section" onClick={onCloseMenu} />
        </ListItem> */}
      </List>
    </nav>
  );
};

export default Navigation;