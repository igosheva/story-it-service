// libs
import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './routes';

// components
import Header from './components/Header';

// pages
import NotFound from './pages/NotFound';

const App = () => {
  const match = useRoutes(routes);

  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : (
    <NotFound />
  );
};

export default App;
