import { useParams } from 'react-router-dom';
import './Category.scss';
import ItemList from '../common/ItemList/ItemList';

function Category() {
    const { categoryHandle } = useParams();

    return(
        <section className="py-5 container" id="category">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Categoría { categoryHandle }</h1>
                    <ItemList category={ categoryHandle } />
                </div>
            </div>
        </section>
    );
}

export default Category;
