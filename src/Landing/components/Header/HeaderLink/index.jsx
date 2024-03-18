import { Link } from '@mui/material';

const HeaderLink = ({ text, target, onClick }) => {

  const smoothScroll = (target, duration) => {
    const targetSection = document.querySelector(target);
    if (targetSection) {
      const targetPosition = targetSection.getBoundingClientRect().top;
      const startPosition = window.scrollY;
      const headerHeight = document.querySelector('.header').clientHeight;
      const offset = headerHeight + 20; // Header height + additional offset
      const distance = targetPosition - offset;
      let startTime = null;

      const animation = currentTime => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animation);
    }
  };

  const handleScroll = (sectionId) => (event) => {
    event.preventDefault();
    smoothScroll(sectionId, 1000);
    if (onClick) {
      onClick();
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