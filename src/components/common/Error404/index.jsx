import image404 from './image404.jpg';
import './Error404.scss';

const Error404 = () => {
    return(
        <section className="py-4 container" id="error404">
            <div className="row">
                <div className="col-12 text-center">
                    <img src={ image404 } alt="Error 404" className="img-fluid" />
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Ooops! No encontramos lo que buscas...</h1>
                    <p>Pero puedes intentar con otra opción.</p>
                </div>
            </div>
        </section>
    );
}

export default Error404;