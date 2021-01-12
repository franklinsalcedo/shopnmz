import { useState, useContext } from 'react';
import { products } from '../../products';
import { Store } from '../../store';


function Cart() {
    const [items, setItems] = useState([]);
    const [data, SetData] = useContext(Store);

    
    

    return (
        <section className="container" id="cart">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Cart</h1>
                </div>
            </div>
            {
                data.items.map(item => 
                     
                    <p>{item.itemId}</p>    
                )
            }
            <div className="row">
                <div className="col-12">
                    Nombre: <br/>
                    Precio: <br/>
                    Cantidad: 
                </div>
            </div>
        </section>
    );
}

export default Cart;
