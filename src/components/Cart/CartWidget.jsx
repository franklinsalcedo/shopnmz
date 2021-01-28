import { useState } from 'react';
import { useContext } from 'react';
import { Store } from '../../store';
import { BiShoppingBag } from 'react-icons/bi';
import { IoCloseCircleOutline } from 'react-icons/io5';
import './CartWidget.scss';

function CartWidget() {
    const [open, setOpen] = useState(false);
    const [data, setData] = useContext(Store);

    return (
        <div className="mr-3 mr-lg-4 p-lg-2 ">
            <div className="icon-cart" onClick={() => {setOpen(!open);}}>
                <span className="total-items-counter">
                    { data.quantity }
                </span>
                <BiShoppingBag />
            </div>
            <div id="slidecart" className={ open ? " open" : null }>
                <div className="px-4 py-3 header">
                    <h3>Cart</h3>
                    <span className="close" onClick={() => {setOpen(!open);}}>
                        <IoCloseCircleOutline />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CartWidget
