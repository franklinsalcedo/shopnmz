import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getFirestore } from '../../../firebase'
import CartWidget from '../../Cart/CartWidget';
import './NavBar.scss';
import { RiMenu2Fill } from 'react-icons/ri';
import Logo from '../../../assets/logo-nmz.png';

function NavBar() {
    const db = getFirestore();
    const [categories, setCategories] = useState([]);

    const getListCategories = () => {
        const listCategories = db.collection('categories');
        let arr = [];
        listCategories.orderBy('order').get()
        .then((docs) => {
            if(docs.size === 0) {
                console.log('No existen las categorías');
            }
            docs.forEach(doc => {
                arr.push(doc.data());
            });
            setCategories(arr);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getListCategories();
    },[])

    return (
        <header>
            <div className="container">
                <div className="row py-3">
                    <div className="mr-auto ml-3 d-lg-none menu-icon-mobile">
                        <RiMenu2Fill />
                    </div>
                    <div className="col-4 pt-2 text-center text-lg-left logo">
                        <NavLink to="/">
                            <img src={Logo} alt="Shop NMZ" className="img-fluid" />
                        </NavLink>
                    </div>
                    <div className="ml-auto pt-2 align-self-center">
                        <CartWidget/>
                    </div>
                </div>
            </div>
            <nav id="mainMenu" className="d-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ul className="nav">
                                <li className="nav-item"><NavLink to="/" className="nav-link" exact>Inicio</NavLink></li>
                                {
                                    categories.map((category) => (
                                        <li className="nav-item"><NavLink to="/categoria/blusas/" className="nav-link">{category.title}</NavLink></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
