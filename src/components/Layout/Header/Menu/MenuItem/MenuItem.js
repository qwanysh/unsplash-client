import { NavLink } from 'react-router-dom';
import styles from './MenuItem.module.css';

const MenuItem = ({ icon, text, to }) => {
  return (
    <NavLink className={styles.root} activeClassName={styles.active} to={to}>
      <img className={styles.icon} src={icon} alt={text} />
      <span className={styles.text}>{text}</span>
    </NavLink>
  );
};

export default MenuItem;
