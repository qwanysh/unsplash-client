import Header from '../../containers/Header/Header';
import useScrollTop from '../../hooks/useScrollTop';

const Layout = ({ children }) => {
  const scrollTop = useScrollTop();

  return (
    <>
      <Header expanded={scrollTop} />
      {children}
      <div style={{ minHeight: '200vh', background: 'darkgray' }} />
    </>
  );
};

export default Layout;
