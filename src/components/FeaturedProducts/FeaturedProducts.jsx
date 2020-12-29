import './FeaturedProducts.scss';
import ItemList from '../common/ItemList/ItemList';

function FeaturedProducts() {
    return (
        <div className="container">
            <div className="row">
                <h2 className="col-12 text-center">Productos Destacados</h2>
            </div>
            <ItemList quantity={4} />
        </div>
    );
};

export default FeaturedProducts;
