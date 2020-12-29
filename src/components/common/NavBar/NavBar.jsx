
import './NavBar.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../../../assets/logo-nmz.png';
import { RiMenu2Fill } from 'react-icons/ri';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <header className="mb-5">
            <div className="container-fluid">
                <div className="row d-flex py-4">
                    <div className="mr-auto mx-3 d-lg-none menu-icon-mobile">
                        <RiMenu2Fill />
                    </div>
                    <div className="col-4 col-md-2 offset-md-1 offset-lg-5 my-0 pt-md-1 pt-lg-0 text-center logo">
                        <NavLink to="/">
                            <img src={Logo} alt="Shop NMZ" className="img-fluid" />
                        </NavLink>
                    </div>
                    <div className="ml-auto align-self-center">
                        <CartWidget/>
                    </div>
                </div>
            </div>
            <nav id="mainMenu" className="d-none d-lg-block container-fluid">
                <div className="col-12">
                    <ul className="nav justify-content-center">
                    <li className="nav-item"><NavLink to="/" className="nav-link" exact>Inicio</NavLink></li>
                        <li className="nav-item"><NavLink to="/categoria/blusas/" className="nav-link">Blusas</NavLink></li>
                        <li className="nav-item"><NavLink to="/categoria/vestidos/" className="nav-link">Vestidos</NavLink></li>
                        <li className="nav-item"><NavLink to="/categoria/pantalones/" className="nav-link">Pantalones</NavLink></li>
                        <li className="nav-item"><NavLink to="/categoria/faldas/" className="nav-link">Faldas</NavLink></li>
                        <li className="nav-item"><NavLink to="/categoria/tops/" className="nav-link">Tops</NavLink></li>
                        <li className="nav-item"><NavLink to="/categoria/bodysuits/" className="nav-link">Bodysuits</NavLink></li>
                        <li className="nav-item"><NavLink to="/categoria/shorts/" className="nav-link">Shorts</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
