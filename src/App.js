import React from 'react';
import { Switch , Route } from 'react-router-dom';

import HomePage from './pages/HomePage.component';
import './pages/HomePage.styles.scss';

function App() {
  return (
    <div>
      <Switch >
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
