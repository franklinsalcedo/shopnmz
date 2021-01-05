import { useParams } from 'react-router-dom'
import './Category.scss';
import ItemList from '../common/ItemList/ItemList';

function Category() {
    const { categoryHandle } = useParams();
    return(
        <section className="container" id="category">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Categoría {categoryHandle}</h1>
                    <ItemList />
                </div>
            </div>
        </section>
    );
}

export default Category;