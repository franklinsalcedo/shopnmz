import NavBar from './components/common/NavBar/NavBar';
import FeaturedProducts from './components/home/FeaturedProducts/FeaturedProducts';
import ItemDetailContainer from './components/common/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <FeaturedProducts />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
