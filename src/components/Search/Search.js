import styles from './Search.module.css';
import AnimateHeight from 'react-animate-height';

const Search = ({ visible }) => {
  return (
    <AnimateHeight
      duration={300}
      easing="ease-in-out"
      height={visible ? 'auto' : 0}
    >
      <div className={styles.root}>
        <input className={styles.input} type="text" placeholder="Поиск" />
        <span className={styles.divider} />
      </div>
    </AnimateHeight>
  );
};

export default Search;
