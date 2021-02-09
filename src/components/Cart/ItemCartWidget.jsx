import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { getFirestore } from '../../firebase';
import { Store } from '../../store';
import { FaTrashAlt } from 'react-icons/fa';
import './ItemCartWidget.scss'; 

function ItemCartWidget(props) {
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
        sessionStorage.setItem('cartNMZ', JSON.stringify(data));
    },[data]);
    
    return (
        <div className="row mb-4 row-items-widget">
            {
                product ?
                    <>
                        <div className="col-4 p-0">
                            <img src={ '/images/'+product.image } className="img-fluid" alt={ product.title }/>
                        </div>
                        <div className="col-7">
                            <p className="pt-3"><strong>{ product.title }</strong></p>
                            <p>Talla: <strong>{ objProduct.size.toUpperCase() }</strong></p>
                            <p className="mb-4">Precio: <strong>${ product.price }</strong></p>
                            <p className="quantity"><strong>Cantidad: { objProduct.qty }</strong></p>
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

export default ItemCartWidget;
