import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/common/NavBar/NavBar';
import Footer from './components/common/Footer/Footer';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import Category from './components/Category/Category';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <FeaturedProducts />
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
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
