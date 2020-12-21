import { useState,useEffect } from 'react';
import ProductThumb from '../ProductThumb/ProductThumb';
import './ItemList.scss';

function ItemList(props) {
    let limit = props.quantity;
    const [items, setItems] = useState([]);
    const products = [
        {
            id: 1,
            title: 'Blusa Río',
            price: 49
        },
        {
            id: 2,
            title: 'Blusa Santa Rita',
            price: 80
        },
        {
            id: 3,
            title: 'Blazer Mogador',
            price: 100
        },
        {
            id: 4,
            title: 'Blusa Logoa',
            price: 30
        },
        {
            id: 5,
            title: 'Blusa Mamounia',
            price: 25
        }
    ];

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
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
    }, []);

    return (
        <div className="row py-3 py-md-5">
            {
                items.length ?
                    <>
                    <h2 className="col-12 text-center">Featured Products</h2>
                        {
                            items.slice(0,limit).map((item, index) => (
                                <ProductThumb id={item.id} title={item.title} price={item.price} />
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