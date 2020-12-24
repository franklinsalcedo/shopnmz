import { useState } from 'react';
import './ItemCount.scss';

function ItemCount(props){
    let initial = props.initial;
    const [count, setCount] = useState(initial);

    return (
        <div className="item-count mx-auto mx-lg-0">
            <div className="quantity-item">
                <button className="btn-minus" onClick={() => setCount((count > 0) ? count - 1 : count)}>-</button>
                <span className="quantity">{ count }</span>
                <button className="btn-plus" onClick={() => setCount((count < props.stock) ? count + 1 : count)}>+</button>
            </div>
            <button className="btn btn-dark">Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;
