import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer/Footer';
import Home from './components/Home';
import Category from './components/Category';
import ItemDetail from './components/ItemDetail';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';
import { Store } from './store';

function App() {
  const [data, setData] = useState({
    items: [],
    quantity: 0,
    freeShipping: 50
  });

  return (
    <Store.Provider value={[data, setData]}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/categoria/:categoryHandle">
            <Category />
          </Route>
          <Route path="/producto/:productHandle">
            <ItemDetail />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </Store.Provider>
  );
}

export default App;
