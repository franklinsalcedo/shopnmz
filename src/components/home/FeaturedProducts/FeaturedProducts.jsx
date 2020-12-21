import './FeaturedProducts.scss';
import ItemList from '../../common/ItemList/ItemList';

function FeaturedProducts() {
    return (
        <div className="container">
            <ItemList quantity={4} />
        </div>
    );
};

export default FeaturedProducts;
