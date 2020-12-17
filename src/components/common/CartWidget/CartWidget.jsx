import { HiOutlineShoppingBag } from 'react-icons/hi'
import './CartWidget.scss';

function CartWidget() {
    return (
        <>
            <a href="#" className="mr-3 mr-lg-4 p-lg-2 icon-cart">
                <span className="total-items-counter">0</span>
                <HiOutlineShoppingBag />
            </a>
        </>
    );
};

export default CartWidget
