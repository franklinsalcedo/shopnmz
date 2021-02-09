import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ItemCart from './ItemCart';
import { Store } from '../../store';
import './Cart.scss';


function Cart() {
    const history = useHistory();
    const [data, setData] = useContext(Store);
    const [products, setProducts] = useState(data.items);
    const [total, setTotal] = useState(data.totalAmount);

    const handleCheckout = (e) => {
        history.push('/checkout');
    }

    const getItems = (obj) => {
        console.log('getItems',obj);
        let rowItems = Object.keys(products).map(key => (<ItemCart key={key} details={products[key]} />));
        return (rowItems);
    }

    const getTotal = () => {
        var totalTemp = 0;
        Object.keys(data.items).map(key => (
            totalTemp = totalTemp + data.items[key].subtotal
        ))
        if(totalTemp !== data.totalAmount) {
            setData({
                ...data,
                totalAmount: totalTemp
            });
        }
        setTotal(totalTemp);
    }

    useEffect(() => {
        setProducts(data.items);
        getTotal();
    },[data,total]);

    return (
        <section className="py-5 container" id="cart">
            <div className="row mb-5">
                <div className="col-12">
                    <h1 className="text-center">Shopping Cart</h1>
                </div>
            </div>
            {
                Object.keys(products).length > 0 ?
                    <div>
                        { getItems(products) }
                        
                        <div className="row my-3 py-3 total">
                            <div className="col-12 text-right">
                                Total a pagar: <strong>${ total }</strong>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-lg-right">
                                <button onClick={ handleCheckout } className="btn btn-dark">Ir al Checkout</button>
                            </div>
                        </div>
                    </div>
                :
                    <div className="row">
                        <div className="col-12 text-center">
                            <p>Carrito vacío...</p>
                        </div>
                    </div>
            }
        </section>
    );
}

export default Cart;
