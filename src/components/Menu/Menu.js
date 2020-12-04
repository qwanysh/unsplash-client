import MenuItem from './MenuItem/MenuItem';
import searchIcon from './icons/search.svg';
import heartIcon from './icons/heart.svg';
import historyIcon from './icons/history.svg';

const Menu = () => {
  return (
    <div>
      <MenuItem icon={searchIcon} text="Поиск" to="/search/" />
      <MenuItem icon={heartIcon} text="Избранное" to="/favorites/" />
      <MenuItem
        icon={historyIcon}
        text="История поиска"
        to="/search-history/"
      />
    </div>
  );
};

export default Menu;
