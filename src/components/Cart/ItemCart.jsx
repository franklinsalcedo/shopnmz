import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import { Store } from '../../store';
import { FaTrashAlt } from 'react-icons/fa';
import './ItemCart.scss'; 

function ItemCart(props) {
    const db = getFirestore();
    const history = useHistory();
    const objProduct = props.details;
    const [data, setData] = useContext(Store);
    const [message, setMessage] = useState('Cargando...');
    const [product, setProduct] = useState();

    const handleClickMinus = (e) => {
        console.log('quita');
    }

    const handleClickPlus = (e) => {
        console.log('agrega');
    }

    const handleRemove = (e) => {
        let item = objProduct;
        let arr = data.items;
        let newArr = arr.filter(e => e !== item);
        setData({
            ...data,
            items: newArr,
            qtyItems: data.qtyItems - objProduct.qty
        });
        
    }

    const getProduct = (id) => {
        const item = db.collection('products').doc(id);
        item.get()
        .then(doc => {
            if(doc.exists) {
                setProduct(doc.data());
            }
        })
        .catch(error => {
            console.log('No se encuentra el producto', error);
            setMessage('El producto no existe...');
        })
    }

    useEffect(() => {
        getProduct(objProduct.itemId);
    },[data]);
    
    return (
        <div className="row mb-4 h-100 row-items">
            {
                product ?
                    <>
                        <div className="col-4 col-lg-1 p-0">
                            <img src={ '/images/'+product.image } className="img-fluid" alt={ product.title }/>
                        </div>
                        <div className="col-7 col-lg-5">
                            <p className="pt-4"><strong>{ product.title }</strong></p>
                            <p>Talla: <strong>{ objProduct.size.toUpperCase() }</strong></p>
                            <p>Precio: <strong>${ product.price }</strong></p>
                        </div>
                        <div className="col-6 col-lg-3 pt-3 d-lg-flex align-items-center item-quantity">
                            <div className=" quantity-item">
                                <button className="btn-minus" onClick={ handleClickMinus }>-</button>
                                <span className="quantity">{ objProduct.qty }</span>
                                <button className="btn-plus" onClick={ handleClickPlus }>+</button>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2 pt-3 d-lg-flex align-items-center justify-content-end text-right item-total">
                            <p><strong>Total: ${ product.price*objProduct.qty }</strong></p>
                        </div>
                        <span className="ico-remove" onClick={ handleRemove }>
                            <FaTrashAlt />
                        </span>
                    </>
                :
                    <div className="col-12 py-4 text-center">
                        <p>{ message }</p>
                    </div>
            }
        </div>
    );
}

export default ItemCart;
