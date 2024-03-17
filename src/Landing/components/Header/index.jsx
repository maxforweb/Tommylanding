import { useState, useEffect, useRef } from 'react';
import { Box, Container } from '@mui/material';

import HeaderLogo from './HeaderLogo';
import Navigation from './Navigation';
import HeaderSocials from './HeaderSocials';
import MenuButton from './MenuButton';
import './header.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavActive, setIsNavActive] = useState(false);
  const headerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 60);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsNavActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const toggleNav = () => {
    setIsNavActive(prevState => !prevState);
  };

  const closeNav = () => {
    setIsNavActive(false);
  }

  return (
    <header ref={headerRef} className={`header ${isScrolled ? 'header--scroll' : ''}`}>
      <Container>
        <Box className='header__wrapper'>
          <HeaderLogo />
          <Navigation isActive={isNavActive} onCloseMenu={closeNav} />
          <HeaderSocials />
          <MenuButton onClick={toggleNav} isActive={isNavActive} />
        </Box>
      </Container>
    </header>
  );
}

export default Header;