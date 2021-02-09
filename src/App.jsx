import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
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
    qtyItems: 0,
    totalAmount: 0
  });

  console.log(sessionStorage.cartNMZ)

  useEffect(() => {
    if(sessionStorage.cartNMZ !== '') {
      setData(JSON.parse(sessionStorage.cartNMZ));
    }
  },[]);
  
  
  //JSON.parse
  //sessionStorage.removeItem('cartNMZ');
  //console.log(sessionStorage.cartNMZ);

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
        </Switch>
        <Footer />
      </BrowserRouter>
    </Store.Provider>
  );
}

export default App;
