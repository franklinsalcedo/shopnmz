import { NavLink } from 'react-router-dom';
import './ProductThumb.scss';
import ItemCount from '../ItemCount/ItemCount';

function ProductThumb(props) {
    return (
        <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
            <div className="card product-thumb">
                <NavLink to={{ pathname: `/producto/${ props.handle }` }}>
                    <img src={ '/images/'+props.image } className="img-fluid card-img-top" alt={ props.title }/>
                </NavLink>
                <div className="card-body">
                    <div className="text-center card-text">
                        <h3><NavLink to={{ pathname: `/producto/${ props.handle }` }}>{ props.title }</NavLink></h3>
                        <p>$USD { props.price }</p>
                        <ItemCount stock={8} initial={0} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductThumb;
