
import './NavBar.scss';
import Logo from '../../../assets/logo-nmz.png';
import CartWidget from '../CartWidget/CartWidget';

function Nav() {
    return (
        <header>
            <div className="container-fluid">
                <div className="row d-flex py-4">
                    <div className="mr-auto d-lg-none">
                        <svg stroke="currentColor" fill="#333333" stroke-width="0" viewBox="0 0 20 20" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </div>
                    <h1 className="col-4 col-md-2 offset-md-1 offset-lg-5 pt-md-1 pt-lg-0 text-center logo">
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
                        <li className="nav-item"><a href="javascript:;" className="nav-link">Inicio</a></li>
                        <li className="nav-item"><a href="javascript:;" className="nav-link">Blusas</a></li>
                        <li className="nav-item"><a href="javascript:;" className="nav-link">Vestidos</a></li>
                        <li className="nav-item"><a href="javascript:;" className="nav-link">Pantalones</a></li>
                        <li className="nav-item"><a href="javascript:;" className="nav-link">Faldas</a></li>
                        <li className="nav-item"><a href="javascript:;" className="nav-link">Tops</a></li>
                        <li className="nav-item"><a href="javascript:;" className="nav-link">Bodysuits</a></li>
                        <li className="nav-item"><a href="javascript:;" className="nav-link">Shorts</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Nav;
