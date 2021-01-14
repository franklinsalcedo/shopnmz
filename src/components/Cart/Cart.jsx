import { useState, useEffect, useContext } from 'react';
import { products } from '../../products';
import { Store } from '../../store';


function Cart() {
    const [data, setData] = useContext(Store);
    const [listProducts] = useState(products);
    const [selects, setSelects] = useState([]);
    
    const getStoreData = () => {
        const dataStore = data.items;
        dataStore.forEach((item,index) => {
            let sel = listProducts.filter(product => product.id === item.itemId);
            selects.push(sel);
        });
        console.log(selects);
    }

    useEffect(() => {
        getStoreData();
    })

    return (
        <section className="container" id="cart">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Cart</h1>
                </div>
            </div>
            {
                selects.length ?
                selects.map((item, index) => (
                    <div className="row">
                        <div className="col-12">
                            Nombre: { item[0].title }
                        </div>
                        <div className="col-12">
                            Precio: ${ item[0].price }
                        </div>
                        <div className="col-12">
                            Cantidad:
                        </div>
                    </div>
                ))
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
