import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getFirestore } from '../../firebase';

const ConsultOrder = () => {
    const db = getFirestore();
    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }
    const query = useQuery();
    const [orderId, setOrderId] = useState(query.get('ord'));
    const [orderData, setOrderData] = useState({});
    const [date, setDate] = useState();

    const handlerChange = (e) => {

    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        let input = document.getElementById('ord').value;
        console.log(input);
        if(input.value !== '')
            document.getElementById('formcodigo').submit();
    }

    const getOrder = (id) => {
        const item = db.collection('orders').doc(id);
        var ord = '';
        item.get()
        .then(doc => {
            if(doc.exists) {
                ord = doc.data();
                setOrderData(ord);
            }
        })
        .catch(error => {
            console.log('No se encuentra la orden', error);
        });
    }

    
    
    useEffect(() => {
        if(orderId)
            getOrder(orderId);
    }, [orderId]);

    useEffect(() => {
        var d = (orderData.date) ? orderData.date.seconds : '';
        var myDate = new Date(d*1000);
        setDate(myDate.toDateString());
    })


    return (
        <section className="py-4 container" id="consult">
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Consulta de orden</h1>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-12 col-lg-6 offset-lg-3">
                    {
                        (!orderId || !orderData.items) ?
                            <form method="get" name="formcodigo" id="formcodigo" onSubmit={ handlerSubmit }>
                                <p>Ingrese su número de orden a consultar:</p>
                                <div className="input-group mb-3">
                                    <input type="text" name="ord" id="ord" className="form-control" placeholder="Número de orden" aria-label="Número de orden" aria-describedby="consult" onChange={ handlerChange } required />
                                    <div className="input-group-append">
                                        <button className="btn btn-dark" type="submit" id="consult">Consultar</button>
                                    </div>
                                </div>
                                {
                                    orderId &&
                                        <p className="text-center alert alert-danger">El número de orden no existe...</p>
                                }
                            </form>
                        :
                            <div>
                                <p className="text-center">Detalle de la orden con serial <strong>{ orderId }</strong> <br/>realizada el: <strong>{ date }</strong></p>
                                {
                                    (orderData.items && orderData.items.length > 0) &&
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Productos</th>
                                                    <th scope="col" className="text-center">Talla</th>
                                                    <th scope="col" className="text-center">Cant:</th>
                                                    <th scope="col" className="text-center">Monto</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    orderData.items.map((item,key) => 
                                                        <tr key={ key }>
                                                            <th scope="row">{ item.itemId }</th>
                                                            <td className="text-center">{ item.size.toUpperCase() }</td>
                                                            <td className="text-center">{ item.qty }</td>
                                                            <td className="text-center">${ item.subtotal }</td>
                                                        </tr>
                                                    )
                                                }
                                                <tr>
                                                    <td scope="row"></td>
                                                    <td></td>
                                                    <th className="text-right">Total:</th>
                                                    <th className="text-center">${ orderData.total }</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                }
                                {
                                    (orderData.buyer && Object.keys(orderData.buyer).length > 0) &&
                                        <>
                                            <h3>Datos de la compra:</h3>
                                            <p>
                                                Nombre: { orderData.buyer.name } { orderData.buyer.lastname }<br />
                                                Dirección: { orderData.buyer.address }<br />
                                                Email: { orderData.buyer.email }<br />
                                                Teléfono: { orderData.buyer.phone }<br />
                                                Tarjeta: **** **** **** { orderData.buyer.cardnumber.slice(orderData.buyer.cardnumber.length -4) }
                                            </p>
                                        </>
                                }
                            </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default ConsultOrder;
