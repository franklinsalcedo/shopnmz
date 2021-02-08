import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Store } from '../../store';
import ItemCartWidget from './ItemCartWidget';
import { BiShoppingBag } from 'react-icons/bi';
import { IoCloseCircleOutline } from 'react-icons/io5';
import './CartWidget.scss';

function CartWidget() {
    const history = useHistory();
    const [data, setData] = useContext(Store);
    const [open, setOpen] = useState(false);
    const [products, setProducts] = useState(data.items);
    const [total, setTotal] = useState(0);

    const handleOpenClose = (e) => {
        showAddCart();
    }

    const handleKeyDown = (e) => {
        e.keyCode === 27 && showAddCart();
    }

    const showAddCart = (o=false) => {
        if(window.location.href.indexOf("/cart") < 0) {
            if(o)
                setOpen(true);
            else
                setOpen(!open);
        }
    }

    const handleGoCart = (e) => {
        showAddCart();
        history.push('/cart');
    }

    const getItems = (obj) => {
        console.log('getItems',obj);
        let rowItems = Object.keys(products).map(key => (<ItemCartWidget key={key} details={products[key]} />));
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
            setTotal(totalTemp);
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        setProducts(data.items);
        getTotal();
        if(data.items.length)
            showAddCart(true);
    }, [data,total]);

    return (
        <div className="mr-3 mr-lg-4 p-lg-2 ">
            <div className="icon-cart" onClick={ handleOpenClose }>
                <span className="total-items-counter">
                    { data.qtyItems }
                </span>
                <BiShoppingBag />
            </div>
            <div id="cover" className={ open ? "open" : null } onClick={ handleOpenClose }></div>
            <div id="slidecart" className={ open ? "open" : null }>
                <div className="container h-100">
                    <div className="row">
                        <div className="col-12 py-3 header">
                            <h3 className="m-0">Cart</h3>
                            <span className="close" onClick={ handleOpenClose }>
                                <IoCloseCircleOutline />
                            </span>
                        </div>
                    </div>
                    <div className="container p-0 pt-4 h-100">
                        {
                            Object.keys(products).length > 0 ?
                                <div className="row h-100">
                                    <div className="col-12 h-100 list-items">
                                        { getItems(products) }
                                    </div>
                                    
                                    <div className="row footer-widget">
                                        <div className="mb-4 col-12 text-center">
                                            Total a pagar: <strong>${ total }</strong>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button onClick={ handleGoCart } className="btn btn-dark">Ir al Cart</button>
                                        </div>
                                    </div>
                                </div>
                            :
                            <div className="row">
                                <p className="col-12 py-5 text-center">Carrito vacío...</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartWidget
