import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { products } from '../../products';
import { Store } from '../../store';
import { FaTrashAlt } from 'react-icons/fa';

function ItemsCart(props) {
    const [data, setData] = useContext(Store);
    const [listProducts, setProducts] = useState(products);
    const [selects, setSelects] = useState(props.list);
    const [total, setTotal] = useState(0);
    const history = useHistory();

    const handleClickMinus = (e) => {
        console.log('quita');
    }

    const handleClickPlus = (e) => {
        console.log('agrega');
    }

    const handleCheckout = (e) => {
        history.push('/checkout');
    }

    useEffect(() => {
        var priceTotal = 0;
        selects.map((item) => (
            priceTotal = priceTotal + (item.productData[0].price*item.qty)
        ));
        setTotal(priceTotal)
    });
    
    return (
        <div className="px-3">
            {
                selects.map((item, index) => (
                    <div key={index} className="row mb-4 h-100 row-items">
                        <div className="col-4 col-lg-1 p-0">
                            <img src={ '/images/'+item.productData[0].image } className="img-fluid"/>
                        </div>
                        <div className="col-7 col-lg-5">
                            <p className="pt-4"><strong>{ item.productData[0].title }</strong></p>
                            <p>Precio: <strong>${ item.productData[0].price }</strong></p>
                        </div>
                        <div className="col-6 col-lg-3 pt-3 d-lg-flex align-items-center item-quantity">
                            <div className=" quantity-item">
                                <button className="btn-minus" onClick={ handleClickMinus }>-</button>
                                <span className="quantity">{ item.qty }</span>
                                <button className="btn-plus" onClick={ handleClickPlus }>+</button>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2 pt-3 d-lg-flex align-items-center justify-content-end text-right item-total">
                            <p>Precio: { item.price }</p>
                        </div>
                        <span className="ico-remove"><FaTrashAlt /></span>
                    </div>
                ))
            }
            <div className="row my-5">
                <div className="col-12 text-right">
                    Total a pagar: ${ total }
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-lg-right">
                    <button onClick={ handleCheckout } className="btn btn-dark">Ir al Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default ItemsCart;