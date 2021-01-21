import { useState, useEffect } from 'react';
import serialize from 'form-serialize';
import { getFirestore } from '../../firebase';
import firebase from 'firebase/app';

const Checkout = () => {
    const db = getFirestore();
    const orders = db.collection('orders');
    const [orderId, setOrderId] = useState({});
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget
        const dataform = serialize(form, {hash: true, empty: false});
        const newOrder = {
            buyer: dataform,
            items: [
                {
                    itemId: 123,
                    title: 'Blusa de prueba',
                    price: 35,
                    qty: 3
                },
                {
                    itemId: 321,
                    title: 'Blazer de prueba',
                    price: 100,
                    qty: 1
                }
            ],
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: 205
        };

        orders.add(newOrder)
        .then(({ id }) => {
            setOrderId(id);
        })
        .catch(err => {
            console.log(err);
        });

    }

    useEffect(() => {
        //console.log(order);
        console.log(orderId);
    });

    return(
        <section className="container" id="checkout">
            <div className="row mb-5">
                <div className="col-12">
                    <h1 className="text-center">Checkout</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6">
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
                            <textarea className="form-control" name="address" rows="4" required />
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
                        <button type="submit" className="btn btn-dark">Pagar</button>
                    </form>
                </div>
                <div className="col-12 col-lg-6"></div>
            </div>
        </section>
    )
}

export default Checkout;