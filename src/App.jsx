import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer/Footer';
import Home from './components/Home';
import Category from './components/Category';
import ItemDetail from './components/ItemDetail';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';
import ConsultOrder from './components/ConsultOrder';
import Error404 from './components/common/Error404';
import { Store } from './store';

function App() {
  const [data, setData] = useState({
    items: [],
    qtyItems: 0,
    totalAmount: 0
  });

  useEffect(() => {
    if(sessionStorage.length > 0){
      let jsonStorage = JSON.parse(sessionStorage.cartNMZ);
      setData(jsonStorage);
    }
  },[]);

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
          { data.totalAmount !== 0 ? <Checkout /> : <Redirect to="/" /> }
          </Route>
          <Route path="/order">
            <ConsultOrder />
          </Route>
          <Route>
            <Error404 />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </Store.Provider>
  );
}

export default App;
