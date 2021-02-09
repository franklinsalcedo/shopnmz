import { useState, useEffect, useContext } from 'react';
import serialize from 'form-serialize';
import { getFirestore } from '../../firebase';
import firebase from 'firebase/app';
import { Store } from '../../store';
import './checkout.scss';
import { BiHomeAlt } from 'react-icons/bi';

const Checkout = () => {
    const db = getFirestore();
    const orders = db.collection('orders');
    const productStore = db.collection('products');
    const [data, setData] = useContext(Store);
    const [products, setProducts] = useState(data.items);
    const [total, setTotal] = useState(data.totalAmount);
    const [orderId, setOrderId] = useState({});
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget
        const dataform = serialize(form, {hash: true, empty: false});
        if(dataform) {
            const newOrder = {
                buyer: dataform,
                items: data.items,
                qtyItems: data.qtyItems,
                total: data.totalAmount,
                date: firebase.firestore.Timestamp.fromDate(new Date())
            };
    
            orders.add(newOrder)
            .then(({ id }) => {
                setOrderId(id);
            })
            .catch(err => {
                console.log(err);
            });
        } else {
            console.log('No se pudo procesar el formulario');
        }
    }

    useEffect(() => {
        //console.log(order);
        //let field = size.l;
        //let decrement = firebase.firestore.FieldValue.increment(1);
        
            //size.l: firebase.firestore.FieldValue.increment(1);
           /* productStore.doc("1PUBqnILkadnDlxbcn3x").update({
                "size.l": 2
            })
            .then(function() {
                console.log("Document successfully updated!");
            }); */
        console.log(orderId);
    });

    return(
        <section className="py-4 container" id="checkout">
            <div className="row mb-5">
                <div className="col-12">
                    <h1 className="text-center">Checkout</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-7">
                    <h2>Información de contacto</h2>
                    <form onSubmit={ handleSubmit } id="dataUser">
                        <div className="mb-4 form-group">
                            <label>Email:</label>
                            <input type="email" className="form-control" name="email" required />
                        </div>
                        <h3>Dirección de envío:</h3>
                        <div className="form-row">
                            <div className="col-12 col-lg-6 form-group">
                                <label>Nombre:</label>
                                <input type="text" className="form-control" name="name" required />
                            </div>
                            <div className="col-12 col-lg-6 form-group">
                                <label>Apellido:</label>
                                <input type="text" className="form-control" name="lastname" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Dirección:</label>
                            <textarea className="form-control" name="address" rows="2" required />
                        </div>
                        <div className="form-row">
                            <div className="col-12 col-lg-6 from-group">
                                <label>Ciudad:</label>
                                <input type="text" className="form-control" name="city" required />
                            </div>
                            <div className="col-12 col-lg-6 from-group">
                                <label>Código postal:</label>
                                <input type="text" className="form-control" name="zip" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Teléfono</label>
                            <input type="tel" className="form-control" name="phone" required />
                        </div>
                        <h3>Datos de Pago</h3>
                        <small>Todas las transacciones son seguras y encriptadas.</small>
                        <div className="form-row">
                            <div className="col-12 col-lg-6 form-group">
                                <label>Número de tarjeta:</label>
                                <input className="form-control" type="number" name="cardnumber" required />
                            </div>
                            <div className="col-12 col-lg-6 form-group">
                                <label>&nbsp;</label>
                               <select className="form-control" name="cardtype">
                                   <option value="Visa">Visa</option>
                                   <option value="Master">Master</option>
                                </select> 
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Nombre en la tarjeta:</label>
                            <input className="form-control" type="text" name="cardname" required />
                        </div>
                        <div className="form-row">
                            <div className="col-12 col-lg-6 form-group">
                                <label>Fecha de expiración:</label>
                                <input className="form-control" type="text" name="cardexp" required />
                            </div>
                            <div className="col-12 col-lg-6 form-group">
                                <label>Código de seguridad:</label>
                                <input className="form-control" type="text" name="cardcode" required />
                            </div>
                        </div>
                        <div className="form-group text-right">
                            <button type="submit" className="btn btn-dark">Pagar Ahora</button>
                        </div>
                    </form>
                </div>
                <div className="col-12 col-lg-4 offset-lg-1">
                    <h2 className="mb-lg-4">Productos</h2>
                    <div className="row mb-2 p-0 resume">
                        <div className="col-12">
                            {
                                data.items.map((item, key) => (
                                    <div className="row mb-0 py-3 resume-item" key={ key }>
                                        <div className="col-12">
                                            <p className="m-0">{ item.nameProduct } (Talla: { item.size }) X { item.qty } = ${ item.subtotal }</p>
                                        </div>
                                    </div>
                                ))    
                            }
                        </div>
                    </div>
                    <div className="row total">
                        <div className="col-6">Total a pagar:</div>
                        <div className="col-6 text-right">${ total }</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout;
