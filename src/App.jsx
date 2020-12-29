import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/common/NavBar/NavBar';
import Footer from './components/common/Footer/Footer';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import Category from './components/Category/Category';
import ItemDetailContainer from './components/common/ItemDetailContainer/ItemDetailContainer';

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
          <ItemDetailContainer />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
