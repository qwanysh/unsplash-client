import styles from './Header.module.css';
import Logo from '../../components/Logo/Logo';
import Container from '../../components/Container/Container';
import Menu from '../../components/Menu/Menu';
import Search from '../../components/Search/Search';
import classnames from 'classnames';

const Header = ({ expanded }) => {
  return (
    <header
      className={classnames(styles.root, {
        [styles['root--expanded']]: expanded,
      })}
    >
      <Container maxWidth={1528}>
        <div className={styles.inner}>
          <Logo text="ImageStock" />
          <Menu />
        </div>
      </Container>
      <Container maxWidth={1876}>
        <Search visible={expanded} />
      </Container>
    </header>
  );
};

export default Header;
