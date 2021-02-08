import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { Store } from '../../../store';
import './ItemCount.scss';

function ItemCount(props){
    const [sizes, setSizes] = useState(props.itemSizes);
    const [size, setSize] = useState();
    const [count, setCount] = useState(1);
    const [data, setData] = useContext(Store);
    const history = useHistory();

    const handleClickMinus =  (e) => {
        setCount((count > 1) ? count - 1 : count);
    }

    const handleClickPlus = (e) => {
        setCount((count < sizes.[size]) ? count + 1 : count);
    }

    const handleChangeQty = (e) => {
       
    }

    const handleSize = siz => {
        setSize(siz);
        if(count > sizes.[siz]) {
            setCount(sizes.[siz]);
        }
    }

    const handledClickAdd = (e) => {
        if(data.items.some(item => item.itemId === props.itemId && item.size === size)){
            const elementIndex = data.items.findIndex(item => item.itemId === props.itemId);
            let update = data.items;
            update[elementIndex] = { ...update[elementIndex], qty: update[elementIndex].qty + count, subtotal: (update[elementIndex].qty + count) * props.itemPrice };
            setData({
                ...data,
                qtyItems: data.qtyItems + count
            });
        } else {
            setData({
                ...data,
                items: [
                    ...data.items,
                    {
                        itemId: props.itemId,
                        qty: count,
                        size: size,
                        subtotal: props.itemPrice * count
                    }
                ],
                qtyItems: data.qtyItems + count
            });
        }
        
        setCount(1);
    }

    useEffect(() => {
        if(sizes.s > 0) {
            setSize('s');
        } else if(sizes.m > 0) {
            setSize('m');
        } else if(sizes.l > 0) {
            setSize('l');
        } else if(sizes.xl > 0) {
            setSize('xl');
        }
    }, [])

    return (
        <div className="item-count mx-auto mx-lg-0">
            <strong className="d-block mb-2">Tallas disponibles: </strong>
            {
                Object.keys(sizes).length > 0 &&
                    <ToggleButtonGroup className="mb-3" name="size" type="radio" value={ size } onChange={ handleSize }>
                        {
                            sizes.s > 0 &&
                                <ToggleButton className="btn-secondary" value="s">S</ToggleButton>
                        }
                        {
                            sizes.m > 0 &&
                                <ToggleButton className="btn-secondary" value="m">M</ToggleButton>
                        }
                        {
                            sizes.l > 0 &&
                                <ToggleButton className="btn-secondary" value="l">L</ToggleButton>
                        }
                        {
                            sizes.xl > 0 &&
                                <ToggleButton className="btn-secondary" value="xl">XL</ToggleButton>
                        }
                    </ToggleButtonGroup>
            }        
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <Button variant="outline-secondary" onClick={ handleClickMinus }>-</Button>
                </InputGroup.Prepend>
                <FormControl aria-describedby="basic-addon1" className="text-center" value={ count } onChange={ handleChangeQty } />
                <InputGroup.Append>
                    <Button variant="outline-secondary" onClick={ handleClickPlus }>+</Button>
                </InputGroup.Append>
            </InputGroup>
            
            <button className="btn btn-dark" onClick={ handledClickAdd }>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;
