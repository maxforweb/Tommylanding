import { Link } from '@mui/material';

const HeaderLink = ({ text, target, onClick }) => {

  const handleScroll = (sectionId) => (event) => {
    event.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      const headerOffset = 20; // Additional offset + header height
      const headerHeight = document.querySelector('.header').clientHeight;
      const position = section.offsetTop - headerHeight - headerOffset;

      window.scrollTo({
        top: position,
        behavior: "smooth"
      });

      if (onClick) {
        onClick();
      }
    }
  };

  return (
    <Link
      href={target}
      className="header__link"
      onClick={handleScroll(target)}
    >
      {text}
    </Link>
  );
};

export default HeaderLink;