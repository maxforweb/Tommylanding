import burger from '../../../assets/burger.svg';

const MenuButton = ({ onClick, isActive }) => {
  return (
    <button className={`header__navigation-btn ${isActive ? 'active' : ''}`} onClick={onClick}>
      <img src={burger} alt="Menu" />
    </button>
  );
};

export default MenuButton;