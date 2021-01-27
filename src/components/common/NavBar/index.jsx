import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getFirestore } from '../../../firebase'
import CartWidget from '../CartWidget/CartWidget';
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
        console.log('nav');
    }

    useEffect(() => {
        getListCategories();
    },[])

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
                        {
                            categories.map((category) => (
                                <li className="nav-item"><NavLink to="/categoria/blusas/" className="nav-link">{category.title}</NavLink></li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
