import styles from './Container.module.css';

const Container = ({ maxWidth, children }) => {
  return (
    <div className={styles.root} style={{ maxWidth: `${maxWidth}px` }}>
      {children}
    </div>
  );
};

export default Container;
