import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductThumb from '../ProductThumb/ProductThumb';
import { getFirestore } from '../../../firebase';
import './ItemList.scss';

function ItemList(props) {
    const db = getFirestore();
    const category = props.category;
    const featured = props.featured;
    const limit = props.quantity;
    const [items, setItems] = useState([]);
    const [message, setMessage] = useState('Cargando...');

    const getProducts = async (cat) => {
        setMessage('Cargando...');
        let itemCollection, 
            arr = [];
        
        if (cat) {
            itemCollection = db.collection("products").where("category", "==", cat);
        } else if (featured) {
            itemCollection = db.collection("products").where("featured", "==", true);
        } else if (cat && featured) {
            itemCollection = db.collection("products").where("category", "==", cat).where("featured", "==", true);
        } else {
            itemCollection = db.collection('products');
        }

        itemCollection.get()
        .then((docs) => {
            if(docs.size === 0) {
                setMessage('Disculpa, no tenemos productos que mostrar en este momento.');
            }
            docs.forEach(doc => {
                arr.push({
                    id: doc.id,
                    data: doc.data()
                });
            })
            setItems(arr);
            //setItems(querySnapshot.docs.map(doc => doc.data()));
        }).catch((error) => {
            setMessage('Disculpa, hubo un error cargando los productos');
        })
    }

    useEffect(() => {
        getProducts(category);
    },[category]);

    return (
        <div className="row py-3 py-md-5">
            {
                items.length ?
                    <>
                        {
                            items.slice(0,limit).map((item) => (
                                <ProductThumb key={item.id} id={item.id} title={item.data.title} price={item.data.price} handle={item.data.handle} image={item.data.image} />
                            ))
                        }
                    </>
                :
                    <p className="col-12 text-center py-5">
                        { message }
                    </p>
            }
        </div>
    );
}

export default ItemList;