import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import './App.css';
import Layout from '../../components/Layout/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
