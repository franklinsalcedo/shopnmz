import './FeaturedProducts.scss';
import ProductThumb from '../../common/ProductThumb/ProductThumb';

function ItemListContainer() {
    return (
        <div className="container">
            <div className="row py-3 py-md-5">
                <ProductThumb title="Blusa Logoa" />
                <ProductThumb title="Blusa Rio" />
                <ProductThumb title="Blazer Lapa" />
                <ProductThumb title="Blazer Mogador" />
            </div>
        </div>
    );
};

export default ItemListContainer
