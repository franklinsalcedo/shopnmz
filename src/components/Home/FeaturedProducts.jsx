import './FeaturedProducts.scss';
import ItemList from '../common/ItemList/ItemList';

function FeaturedProducts() {
    return (
        <div className="my-5 container">
            <div className="row">
                <h2 className="col-12 text-center"><span>Productos Destacados</span></h2>
            </div>
            <ItemList quantity={4} />
        </div>
    );
};

export default FeaturedProducts;
