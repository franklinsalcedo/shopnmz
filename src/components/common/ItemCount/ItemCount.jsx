import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Store } from '../../../store';
import './ItemCount.scss';

function ItemCount(props){
    let initial = props.initial;
    const [count, setCount] = useState(initial);
    const [data, setData] = useContext(Store);
    const history = useHistory();

    const handleClickMinus =  (e) => {
        setCount((count > 0) ? count - 1 : count);
    }

    const handleClickPlus = (e) => {
        setCount((count < props.stock) ? count + 1 : count);
    }

    const handledClickAdd = (e) => {
        if(data.items.some(item => item.itemId === props.itemId)){
            const elementsIndex = data.items.findIndex(item => item.itemId === props.itemId);
            let newArray = data.items;
            newArray[elementsIndex] = { ...newArray[elementsIndex], qty: newArray[elementsIndex].qty + count };
            setData({
                ...data,
                items: newArray,
                quantity: data.quantity + count
            });
        } else {
            setData({
                ...data,
                items: [...data.items,{itemId: props.itemId,qty: count}],
                quantity: data.quantity + count
            });
        }
        setCount(1);
        history.push('/cart');
    }

    console.log(data);

    return (
        <div className="item-count mx-auto mx-lg-0">
            <div className="quantity-item">
                <button className="btn-minus" onClick={ handleClickMinus }>-</button>
                <span className="quantity">{ count }</span>
                <button className="btn-plus" onClick={ handleClickPlus }>+</button>
            </div>
            <button className="btn btn-dark" onClick={ handledClickAdd }>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;
