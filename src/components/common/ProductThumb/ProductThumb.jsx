import './ProductThumb.scss';
import ItemCount from '../ItemCount/ItemCount';

function ProductThumb(props) {
    return (
        <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
            <div className="card product-thumb">
                <img src="https://via.placeholder.com/210x280.jpg" className="card-img-top" alt=""/>
                <div className="card-body">
                    <div className="text-center card-text">
                        <h3>{ props.title }</h3>
                        <ItemCount stock={8} initial={0} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductThumb;
