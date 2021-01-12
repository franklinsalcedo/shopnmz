import { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../common/ItemCount/ItemCount';
import { products } from '../../products';
import './ItemDetail.scss';

function ItemDetail() {
    const {productHandle} = useParams();
    const [product, setProduct] = useState(null);
    
    const getProduct = new Promise((resolve, reject) => {
        const selectProduct = products.filter(item => item.handle === productHandle);
        resolve(selectProduct[0]);
    });

    useEffect(() => {
        getProduct
        .then(response => setProduct(response))
        .catch(error => console.log(error));
    });

    return(
        <div className="container item-detail">
            <div className="row">
                {
                    product ?
                    <>
                        <h1 className="col-12 d-lg-none mb-4 text-center">{ product.title }</h1>
                        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                            <img src={ '/images/'+product.image } className="img-fluid card-img-top" alt={ product.title }/>
                        </div>
                        <div className="col-12 col-lg-6">
                            <h1 className="d-none d-lg-block mb-5">{ product.title }</h1>
                            <p className="price">${ product.price }</p>
                            <ItemCount stock={8} initial={1} itemId={ product.id } />
                            <div className="py-5 description">
                                <h3>Descripción</h3>
                                <p>{ product.description }</p>
                                <p><strong>Material: </strong>{ product.material }</p>
                                <p><strong>Color: </strong>{ product.color }</p>
                            </div>
                        </div>
                    </>
                    :
                    <p className="col-12 text-center py-5">Cargando...</p>
                }
            </div>
        </div>
    );
}

export default ItemDetail;