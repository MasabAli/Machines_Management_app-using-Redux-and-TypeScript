/* eslint-disable react/jsx-no-undef */
import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import Attribute from './pages/Attribute';
import MachineTypePage from './pages/MachineType'
;

const App: React.FC = () => {
  return (
    <Router>
    <Provider store={store}>
      <Attribute/>
      <MachineTypePage/>
      <div>
        <Routes />
      </div>
    </Provider>
    </Router>
  );
}

export default App;