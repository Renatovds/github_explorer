import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/index';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <GlobalStyle />
  </>
);
export default App;
