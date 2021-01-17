import { useState, useEffect, useContext } from 'react';
import ItemsCart from './ItemsCart';
import { products } from '../../products';
import { Store } from '../../store';
import './Cart.scss';


function Cart() {
    const [data, setData] = useContext(Store);
    const [listProducts] = useState(products);
    const [selects, setSelects] = useState({});

    const getStoreData = () => {
        console.log(data);
        var objItemCart = [];
        data.items.forEach((item) => {
            const sel = listProducts.filter(product => product.id === item.itemId);
            objItemCart = [...objItemCart,{productData: sel, qty: item.qty}];
        });
        setSelects(objItemCart);
        //console.log(selects);  
        //let sel = listProducts.filter(product => product.id === item.itemId);
    }
    console.log(selects);
    useEffect(() => {
        getStoreData();
    },[])

    return (
        <section className="container" id="cart">
            <div className="row mb-5">
                <div className="col-12">
                    <h1 className="text-center">Cart</h1>
                </div>
            </div>
            {
                selects.length ?
                    <ItemsCart list={ selects } />
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
