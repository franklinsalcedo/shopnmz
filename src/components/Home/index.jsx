import Slider from './Slider';
import FeaturedProducts from './FeaturedProducts';
import LookBook from './LookBook';

function Home() {
    return(
        <div id="home">
            <Slider />
            <FeaturedProducts />
            <LookBook />
        </div>
    );
}

export default Home;