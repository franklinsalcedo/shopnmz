import { NavLink } from 'react-router-dom';
import './Footer.scss';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 py-3 text-center">
                        <p className="m-0">&copy; Copyright 2021 by NMZ Diseños SAS. - <NavLink to="/order">Consulta tu orden</NavLink></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
