import React from 'react';
import { Switch , Route } from 'react-router-dom';

import HomePage from './pages/HomePage.component';
import ShopPage from './pages/shop/ShopPage.component';
import Header from './components/header/Header.component';
import './pages/HomePage.styles.scss';

function App() {
  return (
    <div>
      <Header />
      <Switch >
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
