import styles from './Header.module.css';
import Logo from './Logo/Logo';
import Container from '../../Container/Container';
import Menu from './Menu/Menu';

const Header = () => {
  return (
    <header className={styles.root}>
      <Container>
        <div className={styles.inner}>
          <Logo text="ImageStock" />
          <Menu />
        </div>
      </Container>
    </header>
  );
};

export default Header;
