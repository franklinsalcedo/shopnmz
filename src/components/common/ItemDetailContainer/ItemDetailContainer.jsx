import { useState,useEffect} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetailContainer.scss';

function ItemDetailContainer() {
    const [product, setProduct] = useState();
    const data = {
        id: 5,
        handle: 'blusa-mamounia',
        title: 'Blusa Mamounia',
        price: 25,
        image: 'blusa-mamounia.jpg',
        description: 'Blusa con escote en V y tiras que cruzan en espalda con capas irregulares.',
        material: '100% Poliester',
        color: 'Naranja, Azul, Beige'
    };

    const loadProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });

    const getProduct = async () => {
        try {
            const result = await loadProduct;
            setProduct(result);
        }
        catch {
            alert('Error cargando el producto');
        }
    }

    useEffect(() => {
        getProduct();
    });

    return(
        <div className="container item-detail">
            <div className="row">
                {
                    product ?
                    <>
                        <h1 className="col-12 d-lg-none mb-4 text-center">{ product.title }</h1>
                        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                            <img src={ '/images/'+product.image } className="img-fluid card-img-top" alt={ product.title }/>
                        </div>
                        <div className="col-12 col-lg-6">
                            <h1 className="d-none d-lg-block mb-5">{ product.title }</h1>
                            <p className="price">${ product.price }</p>
                            <ItemCount stock={8} initial={0} />
                            <div className="py-5 description">
                                <h3>Descripción</h3>
                                <p>{ product.description }</p>
                                <p><strong>Material: </strong>{ product.material }</p>
                                <p><strong>Color: </strong>{ product.color }</p>
                            </div>
                        </div>
                    </>
                    :
                    <p className="col-12 text-center py-5">Cargando...</p>
                }
            </div>
        </div>
    );
}

export default ItemDetailContainer;