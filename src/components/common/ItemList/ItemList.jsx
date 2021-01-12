import { useState,useEffect } from 'react';
import ProductThumb from '../ProductThumb/ProductThumb';
import './ItemList.scss';
import { products } from '../../../products';

function ItemList(props) {
    let limit = props.quantity;
    const [items, setItems] = useState([]);
    const listproducts = products;

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(listproducts);
        }, 2000);
    });

    const getProductsFromDB = async () => {
        try {
            const result = await getProducts;
            setItems(result);
        }
        catch {
            alert('Error recuperando los productos');
        }
    }

    useEffect(() => {
        getProductsFromDB();
    });

    return (
        <div className="row py-3 py-md-5">
            {
                items.length ?
                    <>
                        {
                            items.slice(0,limit).map((item, index) => (
                                <ProductThumb id={item.id} title={item.title} price={item.price} handle={item.handle} image={item.image} />
                            ))
                        }
                    </>
                :
                    <p className="col-12 text-center py-5">Cargando...</p>
            }
        </div>
    );
}

export default ItemList;