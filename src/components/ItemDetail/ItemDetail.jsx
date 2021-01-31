import { useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../common/ItemCount/ItemCount';
import { getFirestore } from '../../firebase';
import './ItemDetail.scss';

function ItemDetail() {
    const db = getFirestore();
    const [product, setProduct] = useState();
    const [message, setMessage] = useState('Cargando...');
    const { productHandle } = useParams();

    const getProduct = () => {
        const item = db.collection('products').where('handle', '==', productHandle);
        let arr = [];
        item.get()
        .then((docs) => {
            if(docs.size === 0) {
                setMessage('Disculpa, no tenemos productos destacados en este momento.');
            }
            docs.forEach(function(doc) {
                arr.push({
                    id: doc.id,
                    data: doc.data()
                });
                setProduct(arr[0]);
            });
        })
        .catch(function(error) {
            setMessage('Disculpa, hubo un error cargando el producto');
        });
    }
    
    useEffect(() => {
        getProduct();
    },[]);

    return(
        <div className="container item-detail">
            <div className="row">
                {
                    product ?
                    <>
                        <h1 className="col-12 d-lg-none mb-4 text-center">{ product.data.title }</h1>
                        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                            <img src={ '/images/'+product.data.image } className="img-fluid card-img-top" alt={ product.data.title }/>
                        </div>
                        <div className="col-12 col-lg-6">
                            <h1 className="d-none d-lg-block mb-5">{ product.data.title }</h1>
                            <p className="price">${ product.data.price }</p>
                            <ItemCount stock={8} initial={1} itemId={ product.id } />
                            <div className="py-5 description">
                                <h3>Descripción</h3>
                                <p>{ product.data.description }</p>
                                <p><strong>Material: </strong>{ product.data.material }</p>
                                <p><strong>Color: </strong>{ product.data.color }</p>
                            </div>
                        </div>
                    </>
                    :
                    <p className="col-12 text-center py-5">{ message }</p>
                }
            </div>
        </div>
    );
}

export default ItemDetail;