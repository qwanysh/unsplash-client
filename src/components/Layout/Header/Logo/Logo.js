import { Link } from 'react-router-dom';
import styles from './Logo.module.css';
import icon from './logo.svg';

const Logo = ({ text }) => {
  return (
    <Link className={styles.root} to="/">
      <img className={styles.icon} src={icon} alt="ImageStock" />
      <span className={styles.text}>{text}</span>
    </Link>
  );
};

export default Logo;
