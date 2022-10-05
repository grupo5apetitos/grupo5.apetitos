import React from "react";
import { Link, Routes, Route } from 'react-router-dom';
import Category from "./Category";
import Content from './Content';
import Products from "./Products";
import Users from "./Users";
import Footer from "./Footer";
import Header from "./Header";

import logo from "../assets/images/apetitos_delivery.png";

function SiderBar() {
    return(
        <React.Fragment>
            <div className="siderbar grid-x">
                {/*<!-- SiderBar -->*/}
                <div className="cell small-2 large-2">
                    <div className="logo">
                        <img src={logo} alt="apetitos_delivery" />
                    </div>
                    <hr/>
                    <nav>
                        <ul className="vertical menu">
                            <li>
                                <Link className="is-active" to="/">
                                    <span>Contenido</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="" to="/products">
                                    <span>Productos</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="" to="/users">
                                    <span>Usuarios</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="" to="/category">
                                    <span>Categorias</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/*<!-- SiderBar End -->*/}
                {/*<!-- Contenido -->*/}
                <div className="cell small-12 large-10">
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<Content />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/category" element={<Category />} />
                    </Routes>
                    <Footer />
                </div>
            </div>
            {/*<!-- Contenido End -->*/}
        </React.Fragment>
    );
}

export default SiderBar;