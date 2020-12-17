
import './NavBar.scss';
import Logo from '../../../assets/logo-nmz.png';
import { RiMenu2Fill } from 'react-icons/ri';
import CartWidget from '../CartWidget/CartWidget';

function Nav() {
    return (
        <header>
            <div className="container-fluid">
                <div className="row d-flex py-4">
                    <div className="mr-auto mx-3 d-lg-none menu-icon-mobile">
                        <RiMenu2Fill />
                    </div>
                    <h1 className="col-4 col-md-2 offset-md-1 offset-lg-5 my-0 pt-md-1 pt-lg-0 text-center logo">
                        <img src={Logo} alt="Shop NMZ" className="img-fluid" />
                    </h1>
                    <div className="ml-auto align-self-center">
                        <CartWidget/>
                    </div>
                </div>
            </div>
            <nav id="mainMenu" className="d-none d-lg-block container-fluid">
                <div className="col-12">
                    <ul className="nav justify-content-center">
                        <li className="nav-item"><a href="#" className="nav-link">Blusas</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Inicio</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Vestidos</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Pantalones</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Faldas</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Tops</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Bodysuits</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Shorts</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Nav;
