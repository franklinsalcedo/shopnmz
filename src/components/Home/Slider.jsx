import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Slider.scss';

const Slider = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Carousel controls={false}>
                    <Carousel.Item>
                        <NavLink to="/"><img src="images/slider/Banner_Principal_Falda.png" className="d-block w-100" alt="Falda Marruecos" /></NavLink>
                    </Carousel.Item>
                    <Carousel.Item>
                        <NavLink to="/"><img src="images/slider/Banner_Principal_Vestido.png" className="d-block w-100" alt="Vestido Medina" /></NavLink>
                    </Carousel.Item>
                    <Carousel.Item>
                        <NavLink to="/"><img src="images/slider/Banner_Principal_Blusa.png" className="d-block w-100" alt="Blusa Santa Rita" /></NavLink>
                    </Carousel.Item>
                </Carousel> 
            </div>        
        </div>
    )
}

export default Slider;