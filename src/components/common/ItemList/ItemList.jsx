import { useState,useEffect } from 'react';
import ProductThumb from '../ProductThumb/ProductThumb';
import './ItemList.scss';

function ItemList(props) {
    let limit = props.quantity;
    const [items, setItems] = useState([]);
    const products = [
        {
            id: 1,
            handle: 'blusa-rio',
            title: 'Blusa Río',
            image: 'blusa-rio.jpg',
            price: 49
        },
        {
            id: 2,
            handle: 'blusa-santa-rita',
            title: 'Blusa Santa Rita',
            image: 'blusa-santa-rita.jpg',
            price: 80
        },
        {
            id: 3,
            handle: 'blazer-mogador',
            title: 'Blazer Mogador',
            image: 'blazer-mogador.jpg',
            price: 100
        },
        {
            id: 4,
            handle: 'blusa-logoa',
            title: 'Blusa Logoa',
            image: 'blusa-logoa.jpg',
            price: 30
        },
        {
            id: 5,
            handle: 'blusa-mamounia',
            title: 'Blusa Mamounia',
            image: 'blusa-mamounia.jpg',
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